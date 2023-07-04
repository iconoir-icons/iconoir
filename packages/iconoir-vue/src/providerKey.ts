import type { InjectionKey, SVGAttributes } from "vue";
const providerKey = Symbol() as InjectionKey<SVGAttributes>;
export default providerKey;
