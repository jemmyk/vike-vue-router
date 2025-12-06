export { onCreateApp }

import type { PageContext } from 'vike/types'

import { createRouter } from './router';

function onCreateApp(pageContext: PageContext) {

  if (pageContext.isRenderingHead) {
    // Don't add the plugin when rendering <head> (see Lifecycle)
    return
  }

  const app = pageContext.app!

  // server & client side
  const router = createRouter()

  pageContext.globalContext.myrouter = router
  // pageContext.myrouter = router

  app.use(router);

};
