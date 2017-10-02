import Flickr from "@/flickr"

async function getTopPlacesList(
  { flickr = Flickr, placeTypeId = `` } = {},
  { date = ``, placeId = ``, woeId = `` } = {}
) {
  return await flickr.fetchResource(`flickr.places.getTopPlacesList`, { placeTypeId }, { date, placeId, woeId })
}

export default getTopPlacesList
