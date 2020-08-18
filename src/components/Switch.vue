<template>
  <div>
    Switch 的文档
    <!-- 不使用v-model <Switch :value="x" @input="x = $event" /> -->
    <!-- 使用v-model <Switch :value="x" @update:value="x = $event" /> -->
    <!-- 使用v-model简写 -->
    <Switch v-model:value="isChecked" />
  </div>
</template>

<script lang="ts">
import { ref, watch } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: {
    Switch
  },
  setup() {
    const isChecked = ref(true);
    return { isChecked };
  }
};
</script>