<template>
  <component
    class="btn"
    :is="href ? 'a' : element"
    :type="type"
    :class="rootClasses"
    :disabled="disabled"
    :href="href"
  >
    <slot></slot>
  </component>
</template>

<script>
import { defineComponent, computed } from "vue";

import { Colors } from "@/models";

export default defineComponent({
  name: "b-button",
  props: {
    element: {
      type: String,
      default: "button",
    },
    type: {
      type: String,
      default: "button",
    },
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
    pill: {
      type: Boolean,
    },
    squared: {
      type: Boolean
    },
    nowrap: {
      type: Boolean,
    },
    href: {
      type: String
    }
  },
  setup(props, { slots }) {
    const rootClasses = computed(() => [
      {
        [`btn-${props.color}`]: props.color,
        [`btn-${props.size}`]: props.size,
        "rounded-pill": props.pill,
        "rounded-0": props.squared,
        "text-nowrap": props.nowrap,
        "disabled": props.href && props.disabled
      },
    ]);
    return { rootClasses };
  },
});
</script>
