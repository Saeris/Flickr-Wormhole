import { invariant, missingArgument } from "@/utilities"
import getPhotos from "@/methods/galleries/getPhotos"

async function fetchGalleryPhotos({ flickr, galleryId = ``, start = 1, perPage = 500, skip = 0  } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(galleryId, missingArgument({ galleryId }))
  try {
    let page = start
    let total = 1
    const results = []

    do {
      const { photos = {} } = await getPhotos({ flickr, galleryId }, { page: page++, perPage })

      total = perPage < 500 ? 1 : perPage > 500 ? parseInt(perPage / 500, 10) : photos?.pages

      photos?.photo?.map(res => results.push(res?.id))
    } while (page <= total)

    info(`Successfully ran fetchGalleryPhotos`, { galleryId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchGalleryPhotos`, err)
  }
}

export default fetchGalleryPhotos
