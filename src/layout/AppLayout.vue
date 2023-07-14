<script lang="ts" setup>
import { DarkSwitch } from '../../packages/frame'
import { supportedLangs, toggleLang, themeMap, useAppStoreWithOut } from '../../packages/frame'
import { Grid, HomeFilled } from '@element-plus/icons-vue'

const appStore = useAppStoreWithOut();
</script>
  
<template>
  <div class="header">
    <span class="title">{{ $t('common.pageTitle') }}</span>
    <span class="setting">
      <dark-switch></dark-switch>

      <el-dropdown @command="appStore.setTheme">
        <i v-ic="'Clothes'"></i>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="item in themeMap" :key="item.theme" :command="item.theme">
              {{ item.name }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-dropdown @command="toggleLang">
        <i v-ic="'Earth'"></i>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="item in supportedLangs" :key="item.lang" :command="item.lang">
              <span :style="{ marginRight: '5px' }">{{ item.abbr }}</span>
              {{ item.name }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </span>
  </div>
  <div class="main">
    <ul class="sider">
      <li>
        <router-link to="/">
          <el-icon :size="20">
            <HomeFilled />
          </el-icon>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <el-icon :size="20">
            <Grid />
          </el-icon>
        </router-link>
      </li>
    </ul>
    <div class="main-inner">
      <router-view />
    </div>
  </div>
</template>

<style lang="less" scoped>
.header {
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 10%);
  background: #3e4963;

  .title {
    font-size: 20px;
    font-weight: 600;
    color: var(--el-color-white);
  }

  .setting {
    display: flex;
    justify-content: space-between;
    align-items: center;

    i {
      font-size: 20px;
      margin-left: 20px;
      color: var(--el-color-white);
      outline: none;

      &:hover {
        color: var(--el-color-primary);
      }
    }
  }
}

.main {
  display: flex;
  width: 100%;
  height: calc(100% - 48px);

  .sider {
    width: 48px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #3e4963;
    border-top: solid 1px #2a344b;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      width: 48px;
      height: 48px;
      text-align: center;
      line-height: 56px;

      a {
        color: var(--el-color-white);
        display: inline-block;
        width: 100%;
        height: 100%;

        &:hover,
        &.router-link-active {
          background-color: #2a344b;
        }
      }
    }
  }

  .main-inner {
    width: calc(100% - 48px);
    height: 100%;
    padding: 20px;
  }
}
</style>