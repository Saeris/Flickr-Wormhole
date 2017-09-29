import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getList from "@/methods/galleries/getList"

async function fetchUserGalleries(userId = ``) {
  invariant(userId, missingArgument({ userId }))
  try {
    let page = 1
    let total = 0
    const results = []

    do {
      const { galleries = {} } = await getList({ userId }, { page: page++ })

      total = galleries?.pages

      for (const res of galleries?.gallery || []) {
        results.push({
          id: res?.id,
          title: (res?.title)?._content || null,
          description: (res?.description)?._content || null,
          owner: userId,
          photoCount: res?.count_photos,
          videoCount: res?.count_videos,
          created: res?.date_create,
          updated: res?.date_update,
          primary: res?.primary_photo_id
        })
      }
    } while (page <= total)

    info(`Successfully ran fetchUserGalleries`, { userId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchUserGalleries`, err)
  }
}

export default fetchUserGalleries
