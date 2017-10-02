import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getInfo from "@/methods/photos/getInfo"

async function fetchPhotoNotes({ flickr, photoId = `` } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(photoId, missingArgument({ photoId }))
  try {
    const { photo = {} } = await getInfo({ flickr, photoId })
    const results = []

    for (const res of (photo?.notes)?.note || []) {
      results.push({
        id: res?.id,
        photo: photoId,
        author: res?.author,
        text: res?._content,
        x: res?.x,
        y: res?.y,
        width: res?.w,
        height: res?.h
      })
    }

    info(`Successfully ran fetchPhotoNotes`, { photoId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchPhotoNotes`, err)
  }
}

export default fetchPhotoNotes
