import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getInfo from "@/methods/photos/getInfo"

async function fetchPhotoByID({ flickr, photoId = `` } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(photoId, missingArgument({ photoId }))
  try {
    const { photo = {} } = await getInfo({ flickr, photoId })
    const result = {
      id: photo?.id,
      secret: photo?.secret,
      server: photo?.server,
      license: photo?.license,
      owner: (photo?.owner)?.nsid,
      title: (photo?.title)?._content,
      caption: (photo?.description)?._content,
      views: photo?.views,
      format: photo?.originalformat,
      media: photo?.media,
      public: !!(photo?.visibility)?.ispublic,
      friends: !!(photo?.visibility)?.isfriend,
      family: !!(photo?.visibility)?.isfamily,
      notes: (photo?.notes)?.note.map(note => ({
        id: note?.id,
        photo: photoId,
        author: note?.author,
        text: note?._content,
        x: note?.x,
        y: note?.y,
        width: note?.w,
        height: note?.h
      })),
      tags: (photo?.tags)?.tag.map(tag => ({
        id: tag?.id,
        author: tag?.author,
        text: tag?.raw
      })),
      hasLocation: !!photo?.location,
      hasComments: parseInt((photo?.comments)?._content || 0, 10),
      hasPeople: !!(photo?.people)?.haspeople,
      posted: (photo?.dates)?.posted,
      taken: (photo?.dates)?.taken,
      updated: (photo?.dates)?.lastupdate
    }

    info(`Successfully ran fetchPhotoByID`, { photoId, result })
    return result
  } catch (err) {
    error(`Failed to run fetchPhotoByID`, err)
  }
}

export default fetchPhotoByID
