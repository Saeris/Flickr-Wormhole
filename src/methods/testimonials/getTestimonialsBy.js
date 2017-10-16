import Flickr from "@/flickr"

export default function getTestimonialsBy({ flickr = Flickr, userId = `` } = {}, { page = 1, perPage = 10 } = {}) {
  return flickr.fetchResource(`flickr.testimonials.getTestimonialsBy`, { userId }, { page, perPage })
}
