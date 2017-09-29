import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getListPhoto from "@/methods/tags/getListPhoto"

async function fetchPhotoTags(photoId = ``) {
  invariant(photoId, missingArgument({ photoId }))

  try {
    const { photo = {} } = await getListPhoto({ photoId })
    const results = []

    for (const res of (photo?.tags)?.tag || []) {
      results.push({
        id: res?.id,
        author: res?.author,
        text: res?.raw
      })
    }

    info(`Successfully ran fetchPhotoTags`, { photoId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchPhotoTags`, err)
  }
}

export default fetchPhotoTags
