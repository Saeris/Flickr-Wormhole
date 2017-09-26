import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getList from "@/methods/favorites/getList"

export default async function fetchUserFavorites(userId = ``) {
  invariant(userId, missingArgument({userId}))
  try {
    let page = 1
    let total = 0
    const results = []

    do {
      const data = await getList({}, { userId, page: page++ })

      if (!!data.photos && !!data.photos.pages && !!data.photos.photo) {
        total = data.photos.pages

        for (const res of data.photos.photo) {
          results.push({
            id: res.id
          })
        }
      }
    } while (page <= total)

    info(`Successfully ran fetchUserFavorites`, { userId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchUserFavorites`, err)
  }
}
