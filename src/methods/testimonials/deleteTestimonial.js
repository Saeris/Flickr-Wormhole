import Flickr from "@/flickr"

async function deleteTestimonial({ flickr = Flickr, testimonialId = `` } = {}) {
  return await flickr.fetchResource(`flickr.testimonials.deleteTestimonial`, { testimonialId }, {}, `write`)
}

export default deleteTestimonial
