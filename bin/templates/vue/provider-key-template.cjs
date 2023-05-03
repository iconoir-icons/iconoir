const template = () => `import type { InjectionKey, SVGAttributes } from "vue-demi";
const providerKey = Symbol() as InjectionKey<SVGAttributes>;
export default providerKey;
`;

module.exports = template;
