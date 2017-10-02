import Flickr from "@/flickr"

async function removeSuggestion({ flickr = Flickr, suggestionId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.suggestions.removeSuggestion`, { suggestionId }, {}, `write`)
}

export default removeSuggestion
