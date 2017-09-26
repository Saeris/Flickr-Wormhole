import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getList from "@/methods/photos/comments/getList"

export default async function fetchPhotoComments(photoId = ``) {
  invariant(photoId, missingArgument({photoId}))
  try {
    const results = []

    const data = await getList({ photoId })

    if (!!data.comments && !!data.comments.comment) {
      for (const res of data.comments.comment) {
        results.push({
          id: res.id,
          author: res.author,
          created: res.datecreate,
          url: decodeURI(res.permalink),
          text: res._content
        })
      }
    }

    info(`Successfully ran fetchPhotoComments`, { photoId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchPhotoComments`, err)
  }
}
