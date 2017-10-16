import { invariant, missingArgument } from "@/utilities"
import getPhotos from "@/methods/galleries/getPhotos"

async function fetchGalleryPhotos({ flickr, galleryId = ``, start = 1, perPage = 500, skip = 0 } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(galleryId, missingArgument({ galleryId }))
  try {
    let page = start
    let total = 1
    const results = []

    do {
      const { photos = {} } = await getPhotos({ flickr, galleryId }, { page: page++, perPage })  // eslint-disable-line

      total = perPage < 500 ? 1 : perPage > 500 ? parseInt(perPage / 500, 10) : photos?.pages

      photos?.photo?.map(data => !!data?.id && results.push(data.id))
    } while (page <= total)

    results.splice(skip < 0 ? skip : 0, Math.abs(skip))
    info(`Successfully ran fetchGalleryPhotos`, { galleryId, start, perPage, skip, results })
    return results
  } catch (err) {
    error(`Failed to run fetchGalleryPhotos`, err)
  }
}

export default fetchGalleryPhotos
