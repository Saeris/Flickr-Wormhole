import { invariant, missingArgument } from "@/utilities"
import getList from "@/methods/favorites/getList"

async function fetchUserFavorites({ flickr, userId = ``, start = 1, perPage = 500, skip = 0 } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(userId, missingArgument({ userId }))
  try {
    let page = start
    let total = 1
    const results = []

    do {
      const { photos = {} } = await getList({ flickr }, { userId, page: page++, perPage })

      total = perPage < 500 ? 1 : perPage > 500 ? parseInt(perPage / 500, 10) : photos?.pages

      photos?.photo?.map(res => results.push(res?.id))
    } while (page <= total)

    info(`Successfully ran fetchUserFavorites`, { userId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchUserFavorites`, err)
  }
}

export default fetchUserFavorites
