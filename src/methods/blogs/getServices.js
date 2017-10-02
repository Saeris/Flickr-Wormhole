import Flickr from "@/flickr"

async function getServices({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.blogs.getServices`)
}

export default getServices
