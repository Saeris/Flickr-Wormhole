import { invariant, missingArgument } from "@/utilities"
import { Photo } from "@/models"
import getInfo from "@/methods/photos/getInfo"

async function fetchPhotoByID({ flickr, photoId = `` } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(photoId, missingArgument({ photoId }))
  try {
    const { photo = {} } = await getInfo({ flickr, photoId })
    const result = new Photo(photo)

    info(`Successfully ran fetchPhotoByID`, { photoId, result })
    return result
  } catch (err) {
    error(`Failed to run fetchPhotoByID`, err)
  }
}

export default fetchPhotoByID
