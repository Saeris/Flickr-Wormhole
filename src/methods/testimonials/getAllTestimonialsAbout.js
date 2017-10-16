import Flickr from "@/flickr"

export default function getAllTestimonialsAbout(
  { flickr = Flickr, userId = `` } = {},
  { page = 1, perPage = 10 } = {}
) {
  return flickr.fetchResource(`flickr.testimonials.getAllTestimonialsAbout`, { userId }, { page, perPage }, `read`)
}
