import Flickr from "@/flickr"

async function editTestimonial({ apiKey = Flickr.apiKey, userId = ``, testimonialId = ``, testimonialText = `` } = {}) {
  return await Flickr.fetchResource(
    `flickr.testimonials.editTestimonial`,
    { apiKey, testimonialId, testimonialText },
    {},
    `write`
  )
}

export default editTestimonial
