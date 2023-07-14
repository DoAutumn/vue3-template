<template>
  <el-config-provider :locale="elementLang">
    <slot></slot>
  </el-config-provider>
</template>

<script lang="ts" setup>
import { elementLang } from '../../i18n'
</script>