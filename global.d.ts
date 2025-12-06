import type { Router } from 'vue-router'

declare global {
    namespace Vike {
        interface PageContext {
            myrouter?: Router
        }
        interface GlobalContextClient {
            myrouter?: Router
        }
        interface GlobalContextServer {
            myrouter ?: Router
        }
    }

    const __VUEPRESS_SSR__: boolean;
}

// If you define Vike.PageContext in a .d.ts file then
// make sure there is at least one export/import statement.
// Tell TypeScript this file isn't an ambient module:
export {}