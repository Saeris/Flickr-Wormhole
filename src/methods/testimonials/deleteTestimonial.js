import Flickr from "@/flickr"

export default function deleteTestimonial({ flickr = Flickr, testimonialId = `` } = {}) {
  return flickr.fetchResource(`flickr.testimonials.deleteTestimonial`, { testimonialId }, {}, `write`)
}
