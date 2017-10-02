import Flickr from "@/flickr"

async function getBrands({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.cameras.getBrands`)
}

export default getBrands
