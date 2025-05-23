import type {
  CfProperties,
  ExecutionContext,
  KVNamespace,
  Request,
} from '@cloudflare/workers-types'

declare module 'h3' {
  interface H3EventContext {
    cf: CfProperties
    cloudflare: {
      request: Request
      env: {
        HELLO: KVNamespace
      }
      context: ExecutionContext
    }
  }
}
