<template>
  <b-button
    :disabled="disabled || loading"
    v-bind="$attrs"
    v-on="$listeners"
    class="loading-button"
    :aria-busy="loading"
    :class="{ loading }">
    <span class="text" :aria-hidden="loading">
      <slot> </slot>
    </span>
    <div class="spinner-wrapper" v-if="loading">
      <b-spinner class="spinner" size="sm"></b-spinner>
      <span class="sr-only">
        {{ loadingLabel }}
      </span>
    </div>
  </b-button>
</template>

<script>
import { BSpinner, BButton } from 'bootstrap-vue';

export default {
  components: {
    BSpinner,
    BButton,
  },
  props: {
    disabled: {
      type: [Boolean, String],
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    loadingLabel: {
      type: String,
      default: '로딩중...',
    },
  },
};
</script>

<style lang="scss" scoped>
.loading-button {
  position: absolute;
  left: 474px;
  bottom: 13px;
}

.loading .text {
  opacity: 0;
  height: 20px;
}

.spinner-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
}

.spinner {
  width: 20px;
  height: 20px;
}
.footer {
  font-size: 20px;
}
</style>
