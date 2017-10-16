import Flickr from "@/flickr"

export default function approveTestimonial({ flickr = Flickr, testimonialId = `` } = {}) {
  return flickr.fetchResource(`flickr.testimonials.approveTestimonial`, { testimonialId }, {}, `write`)
}
