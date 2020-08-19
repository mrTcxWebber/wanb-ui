<template>
  <button @click="toggle" :class="['wanb-switch',{'wanb-checked': value}]">
    <span></span>
  </button>
</template>

<script lang="ts">
  export default {
    props: {
      value: Boolean
    },
    setup(props, context) {
      const toggle = () => {
        // 不使用v-model
        //   context.emit("input", !props.value);
        //   使用v-model
        context.emit("update:value", !props.value);
        //   context.emit("update:qnm", !props.qnm);
      };
      return { toggle };
    }
  };
</script>

<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;

  .wanb-switch {
    height: $h;
    width: $h * 2;
    border: none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;

    span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background: white;
      border-radius: $h2 / 2;
      transition: all 0.25s;
    }

    &.wanb-checked {
      background: #1890ff;

      span {
        left: calc(100% - #{$h2} - 2px);
      }
    }

    &:focus {
      outline: none;
    }

    &:active {
      >span {
        width: $h2 + 4px;
      }
    }

    &.wanb-checked:active {
      >span {
        width: $h2 + 4px;
        margin-left: -4px;
      }
    }
  }
</style>