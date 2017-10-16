import Flickr from "@/flickr"

export default function addTestimonial({ flickr = Flickr, userId = ``, testimonialText = `` } = {}) {
  return flickr.fetchResource(`flickr.testimonials.addTestimonial`, { userId, testimonialText }, {}, `write`)
}
