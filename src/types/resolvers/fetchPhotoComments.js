import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getList from "@/methods/photos/comments/getList"

async function fetchPhotoComments(photoId = ``) {
  invariant(photoId, missingArgument({ photoId }))
  try {
    const { comments = {} } = await getList({ photoId })
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

    info(`Successfully ran fetchPhotoComments`, { photoId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchPhotoComments`, err)
  }
}

export default fetchPhotoComments
