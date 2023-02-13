<script lang="ts" setup>
import { computed } from '@vue/composition-api';

const props = defineProps<{
  msg: string;
}>();

const message = computed(() => 'msg: ' + props.msg);
</script>
<template>
  <div>{{ message }}</div>
</template>
