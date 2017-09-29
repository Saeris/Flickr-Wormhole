import Flickr from "@/flickr"

async function search({ apiKey = Flickr.apiKey, text = `` } = {}, { page = 1, perPage = 100 } = {}) {
  return await Flickr.fetchResource(`flickr.groups.search`, { apiKey, text }, { page, perPage })
}

export default search
