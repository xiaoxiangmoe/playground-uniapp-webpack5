<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import TheBar from './TheBar.vue';

export default {
  components: { TheBar },
  setup() {
    return {
      message: 'hello',
    };
  },
};
</script>
<template>
  <div>123 <TheBar :msg="message" /></div>
</template>
