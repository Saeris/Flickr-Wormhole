import Flickr from "@/flickr"

export default function getPendingTestimonialsBy(
  { flickr = Flickr, userId = `` } = {},
  { page = 1, perPage = 10 } = {}
) {
  return flickr.fetchResource(`flickr.testimonials.getPendingTestimonialsBy`, { userId }, { page, perPage }, `read`)
}
