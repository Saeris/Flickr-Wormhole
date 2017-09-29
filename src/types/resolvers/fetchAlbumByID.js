import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getInfo from "@/methods/photosets/getInfo"

async function fetchAlbumByID(userId = ``, photosetId = ``) {
  invariant(userId, missingArgument({ userId }))
  invariant(photosetId, missingArgument({ photosetId }))
  try {
    const { person = {}, photoset = {} } = await getInfo({ userId, photosetId })
    const result = {
      id: person?.id,
      title: (photoset?.title)?._content,
      description: (photoset?.description)?._content,
      owner: person?.owner,
      photoCount: photoset?.count_photos,
      videoCount: photoset?.count_videos,
      views: photoset?.count_views,
      commentCount: photoset?.count_comments,
      created: photoset?.date_create,
      updated: photoset?.date_update,
      primary: photoset?.primary
    }

    info(`Successfully ran fetchAlbumByID`, { userId, photosetId, result })
    return result
  } catch (err) {
    error(`Failed to run fetchAlbumByID`, err)
  }
}

export default fetchAlbumByID
