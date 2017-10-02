import Flickr from "@/flickr"

async function approveTestimonial({ flickr = Flickr, testimonialId = `` } = {}) {
  return await flickr.fetchResource(`flickr.testimonials.approveTestimonial`, { testimonialId }, {}, `write`)
}

export default approveTestimonial
