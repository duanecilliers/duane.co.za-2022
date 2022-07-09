// src/server/router/index.ts
import { createRouter } from './context'
import superjson from 'superjson'

import { exampleRouter } from './example'
import { githubRouter } from './github'

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('example.', exampleRouter)
  .merge('github.', githubRouter)

// export type definition of API
export type AppRouter = typeof appRouter
