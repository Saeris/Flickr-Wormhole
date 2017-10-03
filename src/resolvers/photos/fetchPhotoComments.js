import { invariant, missingArgument } from "@/utilities"
import { Comment } from "@/models"
import getList from "@/methods/photos/comments/getList"

async function fetchPhotoComments({ flickr, photoId = `` } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(photoId, missingArgument({ photoId }))
  try {
    const { comments = {} } = await getList({ flickr, photoId })
    const results = comments?.comment?.map(data => new Comment({ photo: photoId, ...data})) || []

    info(`Successfully ran fetchPhotoComments`, { photoId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchPhotoComments`, err)
  }
}

export default fetchPhotoComments
