import Flickr from "@/flickr"

async function deleteTestimonial({ apiKey = Flickr.apiKey, testimonialId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.testimonials.deleteTestimonial`, { apiKey, testimonialId }, {}, `write`)
}

export default deleteTestimonial
