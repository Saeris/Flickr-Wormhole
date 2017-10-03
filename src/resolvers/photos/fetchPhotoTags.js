import { invariant, missingArgument } from "@/utilities"
import { Tag } from "@/models"
import getListPhoto from "@/methods/tags/getListPhoto"

async function fetchPhotoTags({ flickr, photoId = `` } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(photoId, missingArgument({ photoId }))

  try {
    const { photo = {} } = await getListPhoto({ flickr, photoId })
    const results = photo?.tags?.tag.map(data => new Tag({ photo: photoId, ...data })) || []

    info(`Successfully ran fetchPhotoTags`, { photoId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchPhotoTags`, err)
  }
}

export default fetchPhotoTags
