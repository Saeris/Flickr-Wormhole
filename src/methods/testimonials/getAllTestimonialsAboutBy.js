import Flickr from "@/flickr"

export default function getAllTestimonialsAboutBy({ flickr = Flickr, userId = `` } = {}) {
  return flickr.fetchResource(`flickr.testimonials.getAllTestimonialsAboutBy`, { userId }, {}, `read`)
}
