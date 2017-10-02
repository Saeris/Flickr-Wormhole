import Flickr from "@/flickr"

async function getTaggingSuggestions({ flickr = Flickr } = {}, { page = 1, perPage = 0 } = {}) {
  return await flickr.fetchResource(`flickr.contacts.getTaggingSuggestions`, {}, { page, perPage }, `read`)
}

export default getTaggingSuggestions
