<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

export default {
  props: { msg: String },
  setup(props) {
    const message = computed(() => 'msg: ' + props.msg);
    return {
      message,
    };
  },
};
</script>
<template>
  <div>{{ message }}</div>
</template>
