import { invariant, missingArgument } from "@/utilities"
import getList from "@/methods/photosets/getList"

async function fetchUserAlbums({ flickr, userId = ``, start = 1, perPage = 500, skip = 0 } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(userId, missingArgument({ userId }))
  try {
    let page = start
    let total = 1
    const results = []

    do {
      const { photosets = {} } = await getList({ flickr }, { userId, page: page++, perPage }) // eslint-disable-line

      total = perPage < 500 ? 1 : perPage > 500 ? parseInt(perPage / 500, 10) : photosets?.pages

      photosets?.photoset?.map(data => !!data?.id && results.push([userId, data.id]))
    } while (page <= total)

    results.splice(skip < 0 ? skip : 0, Math.abs(skip))
    info(`Successfully ran fetchUserAlbums`, { userId, start, perPage, skip, results })
    return results
  } catch (err) {
    error(`Failed to run fetchUserAlbums`, err)
  }
}

export default fetchUserAlbums
