import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getInfo from "@/methods/photosets/getInfo"

async function fetchAlbumByID(userId = ``, photosetId = ``) {
  invariant(userId, missingArgument({userId}))
  invariant(photosetId, missingArgument({photosetId}))
  try {
    const data = await getInfo({ userId, photosetId })
    console.log(data)
    const result = !!data.photoset
      ? {
        id: data.person.id,
        title: data.photoset.title._content,
        description: data.photoset.description._content,
        owner: data.person.owner,
        photoCount: data.photoset.count_photos,
        videoCount: data.photoset.count_videos,
        views: data.photoset.count_views,
        commentCount: data.photoset.count_comments,
        created: data.photoset.date_create,
        updated: data.photoset.date_update,
        primary: data.photoset.primary
      }
      : {}

    info(`Successfully ran fetchAlbumByID`, { userId, result })
    return result
  } catch (err) {
    error(`Failed to run fetchAlbumByID`, err)
  }
}

export default fetchAlbumByID
