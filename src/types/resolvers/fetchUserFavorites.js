import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getList from "@/methods/favorites/getList"

async function fetchUserFavorites({ flickr, userId = `` } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(userId, missingArgument({ userId }))
  try {
    let page = 1
    let total = 0
    const results = []

    do {
      const { photos = {} } = await getList({ flickr }, { userId, page: page++ })

      total = photos?.pages

      photos?.photo?.map(res => results.push(res?.id))
    } while (page <= total)

    info(`Successfully ran fetchUserFavorites`, { userId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchUserFavorites`, err)
  }
}

export default fetchUserFavorites
