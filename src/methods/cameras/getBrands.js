import Flickr from "@/flickr"

export default function getBrands({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.cameras.getBrands`)
}
