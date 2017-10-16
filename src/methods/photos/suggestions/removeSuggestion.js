import Flickr from "@/flickr"

export default function removeSuggestion({ flickr = Flickr, suggestionId = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.suggestions.removeSuggestion`, { suggestionId }, {}, `write`)
}
