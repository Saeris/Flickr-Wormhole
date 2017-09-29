import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getList from "@/methods/photosets/comments/getList"

async function fetchAlbumComments(photosetId = ``) {
  invariant(photosetId, missingArgument({ photosetId }))
  try {
    const { comments = {} } = await getList({ photosetId })
    const results = []

    for (const res of comments?.comment || []) {
      results.push({
        id: res?.id,
        author: res?.author,
        created: res?.datecreate,
        url: decodeURI(res?.permalink),
        text: res?._content
      })
    }

    info(`Successfully ran fetchAlbumComments`, { photosetId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchAlbumComments`, err)
  }
}

export default fetchAlbumComments
