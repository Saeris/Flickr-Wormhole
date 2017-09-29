import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getLocation from "@/methods/photos/geo/getLocation"

async function fetchPhotoLocation(photoId = ``) {
  invariant(photoId, missingArgument({ photoId }))
  try {
    const { photo = {} } = await getLocation({ photoId })
    const result = (photo?.location)?.place_id || null

    info(`Successfully ran fetchPhotoLocation`, { photoId, result })
    return result
  } catch (err) {
    error(`Failed to run fetchPhotoLocation`, err)
  }
}

export default fetchPhotoLocation
