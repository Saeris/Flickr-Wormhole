import Flickr from "@/flickr"

async function approveTestimonial({ apiKey = Flickr.apiKey, testimonialId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.testimonials.approveTestimonial`, { apiKey, testimonialId }, {}, `write`)
}

export default approveTestimonial
