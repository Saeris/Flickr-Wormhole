import { invariant, missingArgument } from "@/utilities"
import { Note } from "@/models"
import getInfo from "@/methods/photos/getInfo"

async function fetchPhotoNotes({ flickr, photoId = `` } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(photoId, missingArgument({ photoId }))
  try {
    const { photo = {} } = await getInfo({ flickr, photoId })
    const results = photo?.notes?.note?.map(data => new Note({ photo: photoId, ...data })) || []

    info(`Successfully ran fetchPhotoNotes`, { photoId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchPhotoNotes`, err)
  }
}

export default fetchPhotoNotes
