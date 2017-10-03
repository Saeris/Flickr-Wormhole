import { invariant, missingArgument } from "@/utilities"
import { Gallery } from "@/models"
import getList from "@/methods/galleries/getList"

async function fetchUserGalleries({ flickr, userId = `` } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(userId, missingArgument({ userId }))
  try {
    let page = 1
    let total = 0
    const results = []

    do {
      const { galleries = {} } = await getList({ flickr, userId }, { page: page++ })

      total = galleries?.pages

      galleries?.gallery?.map(data => results.push(new Gallery(data)))
    } while (page <= total)

    info(`Successfully ran fetchUserGalleries`, { userId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchUserGalleries`, err)
  }
}

export default fetchUserGalleries
