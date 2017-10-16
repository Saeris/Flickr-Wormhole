import Flickr from "@/flickr"

export default function editTestimonial(
  { flickr = Flickr, userId = ``, testimonialId = ``, testimonialText = `` } = {}
) {
  return flickr.fetchResource(`flickr.testimonials.editTestimonial`, { testimonialId, testimonialText }, {}, `write`)
}
