import Flickr from "@/flickr"

export default async function getList({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.panda.getList`, { apiKey })
}
