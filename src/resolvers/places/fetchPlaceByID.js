import { invariant, missingArgument } from "@/utilities"
import { Place } from "@/models"
import getInfo from "@/methods/places/getInfo"

async function fetchPlaceByID({ flickr, placeId = `` } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(placeId, missingArgument({ placeId }))
  try {
    const { place = {} } = await getInfo({}, { flickr, placeId })
    const result = new Place(place)

    info(`Successfully ran fetchPlaceByID`, { placeId, result })
    return result
  } catch (err) {
    error(`Failed to run fetchPlaceByID`, err)
  }
}

export default fetchPlaceByID
