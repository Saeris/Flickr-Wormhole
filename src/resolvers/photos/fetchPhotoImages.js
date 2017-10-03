import { invariant, missingArgument } from "@/utilities"
import { Image } from "@/models"
import getSizes from "@/methods/photos/getSizes"

async function fetchPhotoImages({ flickr, photoId = `` } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(photoId, missingArgument({ photoId }))
  try {
    const { sizes = {} } = await getSizes({ flickr, photoId })
    const results = sizes?.size?.map(data => new Image({
      id: photoId,
      canBlog: !!sizes?.canBlog,
      canPrint: !!sizes?.canPrint,
      canDownload: !!sizes?.canDownload,
      ...data
    })) || []

    info(`Successfully ran fetchPhotoImages`, { photoId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchPhotoImages`, err)
  }
}

export default fetchPhotoImages
