import Flickr from "@/flickr"

export default function getTestimonialsAboutBy({ flickr = Flickr, userId = `` } = {}) {
  return flickr.fetchResource(`flickr.testimonials.getTestimonialsAboutBy`, { userId }, {}, `read`)
}
