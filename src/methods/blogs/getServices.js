import Flickr from "@/flickr"

export default async function getServices({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.blogs.getServices`, { apiKey })
}
