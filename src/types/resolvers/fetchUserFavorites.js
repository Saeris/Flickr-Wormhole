import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getList from "@/methods/favorites/getList"

async function fetchUserFavorites(userId = ``) {
  invariant(userId, missingArgument({ userId }))
  try {
    let page = 1
    let total = 0
    const results = []

    do {
      const { photos = {} } = await getList({}, { userId, page: page++ })

      total = photos?.pages

      for (const res of photos?.photo || []) {
        results.push({
          id: res?.id
        })
      }
    } while (page <= total)

    info(`Successfully ran fetchUserFavorites`, { userId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchUserFavorites`, err)
  }
}

export default fetchUserFavorites
