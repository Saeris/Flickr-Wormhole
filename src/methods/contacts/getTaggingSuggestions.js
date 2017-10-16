import Flickr from "@/flickr"

export default function getTaggingSuggestions({ flickr = Flickr } = {}, { page = 1, perPage = 0 } = {}) {
  return flickr.fetchResource(`flickr.contacts.getTaggingSuggestions`, {}, { page, perPage }, `read`)
}
