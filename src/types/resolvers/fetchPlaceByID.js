import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getInfo from "@/methods/places/getInfo"

async function fetchPlaceByID({ flickr, placeId = `` } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(placeId, missingArgument({ placeId }))
  try {
    const { place = {} } = await getInfo({}, { flickr, placeId })
    const result = {
      name: place?.name,
      id: place?.place_id,
      woe: place?.woeid,
      lat: place?.latitude,
      lon: place?.longitude,
      url: place?.place_url,
      type: place?.place_type,
      timezone: place?.timezone
    }

    info(`Successfully ran fetchPlaceByID`, { placeId, result })
    return result
  } catch (err) {
    error(`Failed to run fetchPlaceByID`, err)
  }
}

export default fetchPlaceByID
