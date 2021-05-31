import * as components from "./components";

const BootstrapVue = {
  install(Vue: any, options = {}) {
    // components
    for (const componentName in components) {
      // @ts-ignore
      const component = components[componentName];

      Vue.component(component.name, component);
    }
  },
};

export default BootstrapVue;
