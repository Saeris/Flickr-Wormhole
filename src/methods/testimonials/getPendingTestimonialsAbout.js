import Flickr from "@/flickr"

export default function getPendingTestimonialsAbout(
  { flickr = Flickr, userId = `` } = {},
  { page = 1, perPage = 10 } = {}
) {
  return flickr.fetchResource(`flickr.testimonials.getPendingTestimonialsAbout`, { userId }, { page, perPage }, `read`)
}
