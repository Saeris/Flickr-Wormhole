import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getSizes from "@/methods/photos/getSizes"

export default async function fetchPhotoImages(photoId = ``) {
  invariant(photoId, missingArgument({photoId}))
  try {
    const data = await getSizes({ photoId })
    const results = []

    if (!!data.sizes && !!data.sizes.size) {
      for (const res  of data.sizes.size) {
        results.push({
          id: photoId,
          canBlog: data.sizes.canBlog,
          canPrint: data.sizes.canPrint,
          canDownload: data.sizes.canDownload,
          label: res.label.replace(` `, `_`),
          width: res.width,
          height: res.height,
          source: decodeURI(res.source),
          url: decodeURI(res.url),
          media: res.media
        })
      }
    }

    info(`Successfully ran fetchPhotoImages`, { photoId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchPhotoImages`, err)
  }
}
