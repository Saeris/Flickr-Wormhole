import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
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

      for (const res of photosets?.photoset || []) {
        results.push({
          id: res?.id,
          title: (res?.title)?._content || null,
          description: (res?.description)?._content || null,
          owner: userId,
          photoCount: res?.photos,
          videoCount: res?.videos,
          views: res?.count_views,
          commentCount: res?.count_comments,
          created: res?.date_create,
          updated: res?.date_update,
          primary: res?.primary
        })
      }
    } while (page <= total)

    info(`Successfully ran fetchUserAlbums`, { userId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchUserAlbums`, err)
  }
}

export default fetchUserAlbums
