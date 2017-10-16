import Flickr from "@/flickr"

export default function getBrandModels({ flickr = Flickr, brand = `` } = {}) {
  return flickr.fetchResource(`flickr.cameras.getBrandModels`, { brand })
}
