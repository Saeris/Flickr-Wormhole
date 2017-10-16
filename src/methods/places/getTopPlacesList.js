import Flickr from "@/flickr"

export default function getTopPlacesList(
  { flickr = Flickr, placeTypeId = `` } = {},
  { date = ``, placeId = ``, woeId = `` } = {}
) {
  return flickr.fetchResource(`flickr.places.getTopPlacesList`, { placeTypeId }, { date, placeId, woeId })
}
