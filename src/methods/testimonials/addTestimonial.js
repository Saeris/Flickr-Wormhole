import Flickr from "@/flickr"

async function addTestimonial({ flickr = Flickr, userId = ``, testimonialText = `` } = {}) {
  return await flickr.fetchResource(`flickr.testimonials.addTestimonial`, { userId, testimonialText }, {}, `write`)
}

export default addTestimonial
