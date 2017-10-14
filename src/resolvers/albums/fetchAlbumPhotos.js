import { invariant, missingArgument } from "@/utilities"
import getPhotos from "@/methods/photosets/getPhotos"

async function fetchAlbumPhotos({ flickr, userId = ``, photosetId = ``, start = 1, perPage = 500, skip = 0 } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(userId, missingArgument({ userId }))
  invariant(photosetId, missingArgument({ photosetId }))
  try {
    let page = start
    let total = 1
    const results = []

    do {
      const { photoset = {} } = await getPhotos({ flickr, userId, photosetId }, { page: page++, perPage })

      total = perPage < 500 ? 1 : perPage > 500 ? parseInt(perPage / 500, 10) : photoset?.pages

      photoset?.photo?.map(data => !!data?.id && results.push(data.id))
    } while (page <= total)

    results.splice(skip < 0 ? skip : 0, Math.abs(skip))
    info(`Successfully ran fetchAlbumPhotos`, { userId, photosetId, start, perPage, skip, results })
    return results
  } catch (err) {
    error(`Failed to run fetchAlbumPhotos`, err)
  }
}

export default fetchAlbumPhotos
