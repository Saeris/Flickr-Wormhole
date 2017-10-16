import Flickr from "@/flickr"

export default function rejectSuggestion({ flickr = Flickr, suggestionId = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.suggestions.rejectSuggestion`, { suggestionId }, {}, `write`)
}
