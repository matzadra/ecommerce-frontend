/* eslint-disable @typescript-eslint/no-unused-vars */
const noop = () => {
  // No-operation function para ambientes SSR
};

const noopStorage = {
  getItem: async (_key: string) => null,
  setItem: async (_key: string, _value: string) => noop(),
  removeItem: async (_key: string) => noop(),
};

export default noopStorage;
