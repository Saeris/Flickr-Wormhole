import { invariant, missingArgument } from "@/utilities"
import { Album } from "@/models"
import getList from "@/methods/photosets/getList"

async function fetchUserAlbums({ flickr, userId = `` } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(userId, missingArgument({ userId }))
  try {
    let page = 1
    let total = 0
    const results = []

    do {
      const { photosets = {} } = await getList({ flickr }, { userId, page: page++ })

      total = photosets?.pages

      photosets?.photoset?.map(data => results.push(new Album(data)))
    } while (page <= total)

    info(`Successfully ran fetchUserAlbums`, { userId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchUserAlbums`, err)
  }
}

export default fetchUserAlbums
