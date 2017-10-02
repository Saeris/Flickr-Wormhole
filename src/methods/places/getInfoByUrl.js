import Flickr from "@/flickr"

async function getInfoByUrl({ flickr = Flickr, url = `` } = {}) {
  return await flickr.fetchResource(`flickr.places.getInfoByUrl`, { url })
}

export default getInfoByUrl
