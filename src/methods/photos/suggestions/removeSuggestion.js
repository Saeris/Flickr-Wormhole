import Flickr from "@/flickr"

async function removeSuggestion({ apiKey = Flickr.apiKey, suggestionId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.suggestions.removeSuggestion`, { apiKey, suggestionId }, {}, `write`)
}

export default removeSuggestion
