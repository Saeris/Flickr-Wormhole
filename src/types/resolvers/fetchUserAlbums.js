import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getList from "@/methods/photosets/getList"

export default async function fetchUserAlbums(userId = ``) {
  invariant(userId, missingArgument({userId}))
  try {
    let page = 1
    let total = 0
    const results = []

    do {
      const data = await getList({}, { userId, page: page++ })

      if (!!data.photosets && !!data.photosets.photoset) {
        total = data.photosets.pages

        for (const res of data.photosets.photoset) {
          results.push({
            id: res.id,
            title: res.title._content,
            description: res.description._content,
            owner: userId,
            photoCount: res.photos,
            videoCount: res.videos,
            views: res.count_views,
            commentCount: res.count_comments,
            created: res.date_create,
            updated: res.date_update,
            primary: res.primary
          })
        }
      }
    } while (page <= total)

    info(`Successfully ran fetchUserAlbums`, { userId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchUserAlbums`, err)
  }
}
