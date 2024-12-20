import type { InjectionKey, Ref, SVGAttributes } from 'vue';

const providerKey = Symbol('IconoirProvider') as InjectionKey<Ref<SVGAttributes>>;
export default providerKey;
