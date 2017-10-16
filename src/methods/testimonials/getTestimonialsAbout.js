import Flickr from "@/flickr"

export default function getTestimonialsAbout({ flickr = Flickr, userId = `` } = {}, { page = 1, perPage = 10 } = {}) {
  return flickr.fetchResource(`flickr.testimonials.getTestimonialsAbout`, { userId }, { page, perPage })
}
