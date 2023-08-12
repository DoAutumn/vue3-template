<template>
  <div class="target-element" ref="targetElement">
    <el-table :data="data" :height="state.targetHeight" border stripe :size="'default'"
      @selection-change="handleSelectionChange">
      <template v-for="column in columns">
        <el-table-column v-if="column.type" :type="column.type" :label="$t(column.i18n || '')" />
        <el-table-column v-else-if="column.buttons" :label="$t('common.operate')" :width="column.width">
          <i v-for="btn in column.buttons" v-ic="btn.icon"></i>
        </el-table-column>
        <el-table-column v-else :label="$t(column.i18n)" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="getSlotName(column)" v-bind="scope.row">{{ scope.row[column.key] }}</slot>
          </template>
        </el-table-column>
      </template>
      <template #empty>
        <el-empty :image-size="100" :description="$t('common.nodata')" />
      </template>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, onUnmounted, watch } from 'vue';

interface Column {
  key: string;
  i18n: string;
  type: string;
  width: number;
  buttons: Array<any>;
}

const props = defineProps({
  columns: {
    type: Array<Column>,
    required: true
  },
  data: {
    type: Array,
    required: true
  },
});

const targetElement = ref();

const state = reactive({ targetHeight: 0 });

const handleSelectionChange = (val) => {
  console.log(val);
};

const getSlotName = (column) => {
  return column.key + 'ColumnSlot';
};

const getTargetHeight = () => {
  state.targetHeight = targetElement.value.offsetHeight;
};

onMounted(() => {
  getTargetHeight();
  window.addEventListener('resize', getTargetHeight);
});

onUnmounted(() => {
  window.removeEventListener('resize', getTargetHeight);
});
</script>

<style lang="less" scoped>
.target-element {
  width: 100%;
  height: 100%;

  .iconfont {
    margin-right: 8px;
  }

  .el-table--small .iconfont {
    font-size: 12px;
  }
}
</style>