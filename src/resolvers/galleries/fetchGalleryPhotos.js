import { invariant, missingArgument } from "@/utilities"
import getPhotos from "@/methods/galleries/getPhotos"

async function fetchGalleryPhotos({ flickr, galleryId = `` } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(galleryId, missingArgument({ galleryId }))
  try {
    let page = 1
    let total = 0
    const results = []

    do {
      const { photos = {} } = await getPhotos({ flickr, galleryId }, { page: page++ })

      total = photos?.pages

      photos?.photo?.map(res => results.push(res?.id))
    } while (page <= total)

    info(`Successfully ran fetchGalleryPhotos`, { galleryId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchGalleryPhotos`, err)
  }
}

export default fetchGalleryPhotos
