import Flickr from "@/flickr"

async function approveSuggestion({ apiKey = Flickr.apiKey, suggestionId = `` } = {}) {
  return await Flickr.fetchResource(
    `flickr.photos.suggestions.approveSuggestion`,
    { apiKey, suggestionId },
    {},
    `write`
  )
}

export default approveSuggestion
