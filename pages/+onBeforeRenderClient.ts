// +onBeforeRenderClient.ts
// Environment: client

import type { PageContextClient } from 'vike/types'
import { useRouter } from 'vue-router';

export async function onBeforeRenderClient(pageContext: PageContextClient) {

    const router = pageContext.globalContext.myrouter!;
    // const router = pageContext.myrouter!;

    await router?.isReady()

}
