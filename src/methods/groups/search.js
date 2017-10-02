import Flickr from "@/flickr"

async function search({ flickr = Flickr, text = `` } = {}, { page = 1, perPage = 100 } = {}) {
  return await flickr.fetchResource(`flickr.groups.search`, { text }, { page, perPage })
}

export default search
