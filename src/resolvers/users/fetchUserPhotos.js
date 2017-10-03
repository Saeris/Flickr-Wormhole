import { invariant, missingArgument } from "@/utilities"
import getPhotos from "@/methods/people/getPhotos"

async function fetchUserPhotos({ flickr, userId = `` } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(userId, missingArgument({ userId }))
  try {
    let page = 1
    let total = 0
    const results = []

    do {
      const { photos = {} } = await getPhotos({ flickr, userId }, { page: page++ })

      total = photos?.pages

      photos?.photo?.map(res => results.push(res?.id))
    } while (page <= total)

    info(`Successfully ran fetchUserPhotos`, { userId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchUserPhotos`, err)
  }
}

export default fetchUserPhotos
