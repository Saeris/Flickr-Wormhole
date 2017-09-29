import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getInfo from "@/methods/photos/getInfo"

async function fetchPhotoByID(photoId = ``) {
  invariant(photoId, missingArgument({ photoId }))
  try {
    const { photo = {} } = await getInfo({ photoId })
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
