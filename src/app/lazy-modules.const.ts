export const LAZY_MODULE_IMPORT_FUNCTIONS: Map<string, () => Promise<unknown>> = new Map([
  ['A', async () => await import('@lazy/lazy-a').then(m => m.LazyAModule)],
  ['B', async () => await import('@lazy/lazy-b').then(m => m.LazyBModule)],
  ['C', async () => await import('@lazy/lazy-c').then(m => m.LazyCModule)],
  ['D', async () => await import('@lazy/lazy-d').then(m => m.LazyDModule)]
])
