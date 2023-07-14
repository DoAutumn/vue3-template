<template>
  <el-switch
    inline-prompt
    v-model="value"
    class="dark-switch"
    :active-icon="Sunny"
    :inactive-icon="Moon"
    @change="handleChange"
    >
  </el-switch>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useAppStore } from '../../store/modules/app'

const appStore = useAppStore()

const value = ref(!appStore.getIsDark.value)

watch(
  () => appStore.getIsDark.value,
  (val) => {
    value.value = !val
  }
)

const handleChange = () => {
  appStore.setIsDark(!value.value)
}
</script>

<style lang="less">
.dark-switch {
  .el-switch__core {
    background-color: var(--el-switch-on-color);
  }
}

html.dark {
  .dark-switch {
    .el-switch__core {
      background-color: #000;
    }
  }
}
</style>