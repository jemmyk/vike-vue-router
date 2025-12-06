// pages/+onBeforeRenderHtml.ts
// Environment: server

import type { PageContextServer } from 'vike/types'
import { useRouter } from 'vue-router';

export async function onBeforeRenderHtml(pageContext: PageContextServer) {

    // const router = pageContext.globalContext.myrouter!;
    const router = pageContext.myrouter!;

    // set the router to the desired URL before rendering
    router.push(pageContext.urlPathname)
    
    await router?.isReady()

}