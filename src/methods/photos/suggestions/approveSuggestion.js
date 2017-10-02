import Flickr from "@/flickr"

async function approveSuggestion({ flickr = Flickr, suggestionId = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.suggestions.approveSuggestion`, { suggestionId }, {}, `write`)
}

export default approveSuggestion
