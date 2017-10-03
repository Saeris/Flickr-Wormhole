import { invariant, missingArgument } from "@/utilities"
import { Comment } from "@/models"
import getList from "@/methods/photosets/comments/getList"

async function fetchAlbumComments({ flickr, photosetId = `` } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(photosetId, missingArgument({ photosetId }))
  try {
    const { comments = {} } = await getList({ flickr, photosetId })
    const results = comments?.comment?.map(data => new Comment({ album: photosetId, ...data})) || []

    info(`Successfully ran fetchAlbumComments`, { photosetId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchAlbumComments`, err)
  }
}

export default fetchAlbumComments
