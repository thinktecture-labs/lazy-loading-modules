export const LAZY_MODULES: Map<string, Promise<unknown>> = new Map([
  ['A', import('@lazy/lazy-a').then(m => m.LazyAModule)],
  ['B', import('@lazy/lazy-b').then(m => m.LazyBModule)],
  ['C', import('@lazy/lazy-c').then(m => m.LazyCModule)],
  ['D', import('@lazy/lazy-d').then(m => m.LazyDModule)]
])
