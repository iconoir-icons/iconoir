import type { InjectionKey, SVGAttributes } from 'vue-demi';

const providerKey = Symbol('IconoirProvider') as InjectionKey<SVGAttributes>;
export default providerKey;
