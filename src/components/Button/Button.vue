<template>
  <button type="button" class="btn" :class="rootClasses" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent, computed } from "vue";

import { Colors, Sizes } from "@/models";

export default defineComponent({
  name: "b-button",
  props: {
    color: {
      type: String,
      default: Colors.PRIMARY,
    },
    size: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
  },
  setup(props, { slots }) {
    const rootClasses = computed(() => [
      {
        [`btn-${props.color}`]: props.color,
        [`btn-${props.size}`]: props.size,
      },
    ]);
    return { rootClasses };
  },
});
</script>
