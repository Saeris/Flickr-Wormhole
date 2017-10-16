import Flickr from "@/flickr"

export default function getAllTestimonialsBy({ flickr = Flickr, userId = `` } = {}, { page = 1, perPage = 10 } = {}) {
  return flickr.fetchResource(`flickr.testimonials.getAllTestimonialsBy`, { userId }, { page, perPage }, `read`)
}
