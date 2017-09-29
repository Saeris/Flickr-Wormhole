import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getSizes from "@/methods/photos/getSizes"

async function fetchPhotoImages(photoId = ``) {
  invariant(photoId, missingArgument({ photoId }))
  try {
    const { sizes = {} } = await getSizes({ photoId })
    const results = []

    for (const res of sizes?.size || []) {
      results.push({
        id: photoId,
        canBlog: !!sizes?.canBlog,
        canPrint: !!sizes?.canPrint,
        canDownload: !!sizes?.canDownload,
        label: res?.label.replace(` `, `_`) || null,
        width: res?.width || null,
        height: res?.height || null,
        source: decodeURI(res?.source),
        url: decodeURI(res?.url),
        media: res?.media
      })
    }

    info(`Successfully ran fetchPhotoImages`, { photoId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchPhotoImages`, err)
  }
}

export default fetchPhotoImages
