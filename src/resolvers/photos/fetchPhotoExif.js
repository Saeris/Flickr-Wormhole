import { invariant, missingArgument } from "@/utilities"
import { Exif } from "@/models"
import getExif from "@/methods/photos/getExif"

async function fetchPhotoExif({ flickr, photoId = `` } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(photoId, missingArgument({ photoId }))
  try {
    const { photo = {} } = await getExif({ flickr, photoId })
    let result = {}

    if (!!photo && !!photo.exif) {
      const exif = Object.entries(
        photo.exif.reduce((hash, entry) => {
          hash[entry.tagspace] = photo.exif.filter(tag => tag.tagspace === entry.tagspace).reduce((keys, values) => {
            keys[values.tag] = (values?.clean)?._content || (values?.raw)?._content || null
            return keys
          }, {})
          return hash
        }, {})
      ).reduce((hash, [tagspace, entries]) => {
        hash[tagspace] = entries
        return hash
      }, {})

      result = new Exif({ photoId, camera: photo?.camera, ...exif })
    }

    info(`Successfully ran fetchPhotoExif`, { photoId, result })
    return result
  } catch (err) {
    error(`Failed to run fetchPhotoExif`, err)
  }
}

export default fetchPhotoExif
