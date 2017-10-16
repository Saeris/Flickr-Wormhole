import Flickr from "@/flickr"

export default function approveSuggestion({ flickr = Flickr, suggestionId = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.suggestions.approveSuggestion`, { suggestionId }, {}, `write`)
}
