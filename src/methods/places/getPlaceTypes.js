import Flickr from "@/flickr"

async function getPlaceTypes({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.places.getPlaceTypes`)
}

export default getPlaceTypes
