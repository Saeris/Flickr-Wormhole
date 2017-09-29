import Flickr from "@/flickr"

async function addTestimonial({ apiKey = Flickr.apiKey, userId = ``, testimonialText = `` } = {}) {
  return await Flickr.fetchResource(
    `flickr.testimonials.addTestimonial`,
    { apiKey, userId, testimonialText },
    {},
    `write`
  )
}

export default addTestimonial
