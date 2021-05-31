<template>
  <component
    class="btn"
    :is="rootElement"
    :type="type"
    :class="rootClasses"
    :disabled="disabled"
    :href="href"
    :to="to"
    v-bind="rootAttributes"
    @click="onClick"
  >
<!--    @click="onClick"-->
    <slot></slot>
  </component>
</template>

<script>
import { defineComponent, computed, reactive, ref } from "vue";

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
    to: {},
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
      type: Boolean,
    },
    nowrap: {
      type: Boolean,
    },
    href: {
      type: String,
    },
    pressed: {
      type: Boolean,
    },
  },
  setup(props) {
    const isActive = ref(props.pressed);

    const rootElement = computed(() => {
      if (props.href) return "a";
      else if (props.to) return "router-link";
      else return props.element;
    });

    const rootClasses = computed(() => [
      {
        [`btn-${props.color}`]: props.color,
        [`btn-${props.size}`]: props.size,
        "rounded-pill": props.pill,
        "rounded-0": props.squared,
        "text-nowrap": props.nowrap,
        disabled: props.href && props.disabled,
        active: props.pressed,
      },
    ]);

    const rootAttributes = computed(() => {
      return {
        "aria-disabled": props.disabled,
        "aria-pressed": isActive.value,
        ...{ tabindex: props.disabled ? "-1" : "" },
        "data-bs-toggle": "button",
      };
    });

    function onClick() {
      isActive.value = !isActive.value;
    }

    return { rootElement, rootClasses, rootAttributes, onClick };
  },
});
</script>
