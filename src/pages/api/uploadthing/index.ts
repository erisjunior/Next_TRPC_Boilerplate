import { createNextPageApiHandler } from 'uploadthing/next-legacy'

import { generalFileRouter } from '~/application/config/upload-file'

const handler = createNextPageApiHandler({
  router: generalFileRouter
})

export default handler
