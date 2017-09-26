import Flickr from "@/flickr"

export default async function echo({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.test.echo`, { apiKey })
}
