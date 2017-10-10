import { invariant, missingArgument } from "@/utilities"
import { Album } from "@/models"
import getList from "@/methods/photosets/getList"

async function fetchUserAlbums({ flickr, userId = ``, start = 1, perPage = 500, skip = 0 } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(userId, missingArgument({ userId }))
  try {
    let page = start
    let total = 1
    const results = []

    do {
      const { photosets = {} } = await getList({ flickr }, { userId, page: page++, perPage })

      total = perPage < 500 ? 1 : perPage > 500 ? parseInt(perPage / 500, 10) : photosets?.pages

      photosets?.photoset?.map(data => results.push(new Album(data)))
    } while (page <= total)

    info(`Successfully ran fetchUserAlbums`, { userId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchUserAlbums`, err)
  }
}

export default fetchUserAlbums
