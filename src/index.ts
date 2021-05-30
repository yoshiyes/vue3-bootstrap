import { App } from "vue";

import { components } from "@/components";

function install(Vue: App): void {
  // tslint:disable-next-line
  for (const component in components) {
    // @ts-expect-error: Prevent ts
    Vue.component(components[component].name, components[component]);
  }
}

export default { install };

export * from "./components";
