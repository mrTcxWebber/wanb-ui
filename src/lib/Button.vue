<template>
  <button
    :class="['wanb-button',`wanb-theme-${theme}`,`wanb-size-${size}`,`wanb-level-${level}`]"
    :disabled="disabled"
    v-bind="rest"
  >
    <span v-if="loading" class="wanb-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script lang="ts">
/* 
### props 和 attrs 区别
1. props要先声明才能取值， attrs不用先声明
2. props不包含事件，attrs包含
3. props没声明的属性，会跑到attrs里
4. props支持很多类型，attr只有string类型
*/
export default {
  inheritAttrs: false,
  props: {
    // 也可以不用props接收，可以在setup里面取出来再导出
    theme: {
      type: String,
      default: "button"
    },
    size: {
      type: String,
      default: "normal" // big / normal / small
    },
    level: {
      type: String,
      default: "normal" // main / normal / minor / danger
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  mounted() {},
  setup(props, context) {
    // console.log({ ...props });
    const { ...rest } = { ...context.attrs };
    console.log(rest);
    return { rest };
  }
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.wanb-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  &.wanb-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
    &.wanb-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.wanb-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
    &.wanb-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.wanb-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.wanb-theme-link,
  &.wanb-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  &.wanb-theme-button {
    &.wanb-size-big {
      font-size: 24px;
      height: 48px;
      padding: 0 16px;
    }
    &.wanb-size-small {
      font-size: 12px;
      height: 20px;
      padding: 0 4px;
    }
    &.wanb-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.wanb-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
}
.wanb-loadingIndicator {
  width: 14px;
  height: 14px;
  display: inline-block;
  margin-right: 4px;
  border-radius: 8px;
  border-color: $blue $blue $blue transparent;
  border-style: solid;
  border-width: 2px;
  animation: wanb-spin 1s infinite linear;
}

@keyframes wanb-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>