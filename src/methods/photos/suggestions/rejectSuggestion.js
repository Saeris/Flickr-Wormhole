import Flickr from "@/flickr"

async function rejectSuggestion({ flickr = Flickr, suggestionId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.suggestions.rejectSuggestion`, { suggestionId }, {}, `write`)
}

export default rejectSuggestion
