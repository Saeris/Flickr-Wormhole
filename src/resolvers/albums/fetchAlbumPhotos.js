import { invariant, missingArgument } from "@/utilities"
import getPhotos from "@/methods/photosets/getPhotos"

async function fetchAlbumPhotos({ flickr, userId = ``, photosetId = ``, offset = 1, perPage = 500 } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(userId, missingArgument({ userId }))
  invariant(photosetId, missingArgument({ photosetId }))
  try {
    let page = offset
    let total = 0
    const results = []

    do {
      const { photoset = {} } = await getPhotos({ flickr, userId, photosetId }, { page: page++, perPage })

      total = perPage < 500 ? 1 : perPage > 500 ? parseInt(perPage / 500, 10) : photoset?.pages

      photoset?.photo?.map(res => results.push(res?.id))
    } while (page <= total)

    info(`Successfully ran fetchAlbumPhotos`, { userId, photosetId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchAlbumPhotos`, err)
  }
}

export default fetchAlbumPhotos
