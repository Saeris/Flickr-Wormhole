import Flickr from "@/flickr"

export default async function rejectSuggestion({ apiKey = Flickr.apiKey, suggestionId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.suggestions.rejectSuggestion`, { apiKey, suggestionId }, {}, `write`)
}
