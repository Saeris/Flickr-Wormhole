import Flickr from "@/flickr"

export default async function approveSuggestion({ apiKey = Flickr.apiKey, suggestionId = `` } = {}) {
  return await Flickr.fetchResource(
    `flickr.photos.suggestions.approveSuggestion`,
    { apiKey, suggestionId },
    {},
    `write`
  )
}
