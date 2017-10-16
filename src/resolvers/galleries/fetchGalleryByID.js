import { invariant, missingArgument } from "@/utilities"
import { Gallery } from "@/models"
import getInfo from "@/methods/galleries/getInfo"

async function fetchGalleryByID({ flickr, userId = ``, galleryId = `` } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(galleryId, missingArgument({ galleryId }))
  try {
    const { gallery = {} } = await getInfo({ flickr, userId, galleryId })
    const result = new Gallery(gallery)

    info(`Successfully ran fetchGalleryByID`, { galleryId, result })
    return result
  } catch (err) {
    error(`Failed to run fetchGalleryByID`, err)
  }
}

export default fetchGalleryByID
