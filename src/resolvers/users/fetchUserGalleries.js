import { invariant, missingArgument } from "@/utilities"
import { Gallery } from "@/models"
import getList from "@/methods/galleries/getList"

async function fetchUserGalleries({ flickr, userId = ``, start = 1, perPage = 500, skip = 0 } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(userId, missingArgument({ userId }))
  try {
    let page = start
    let total = 1
    const results = []

    do {
      const { galleries = {} } = await getList({ flickr, userId }, { page: page++, perPage }) // eslint-disable-line

      total = perPage < 500 ? 1 : perPage > 500 ? parseInt(perPage / 500, 10) : galleries?.pages

      galleries?.gallery?.map(data => results.push(new Gallery(data)))
    } while (page <= total)

    results.splice(skip < 0 ? skip : 0, Math.abs(skip))
    info(`Successfully ran fetchUserGalleries`, { userId, start, perPage, skip, results })
    return results
  } catch (err) {
    error(`Failed to run fetchUserGalleries`, err)
  }
}

export default fetchUserGalleries
