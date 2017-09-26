import Flickr from "@/flickr"

export default async function addTestimonial({ apiKey = Flickr.apiKey, userId = ``, testimonialText = `` } = {}) {
  return await Flickr.fetchResource(
    `flickr.testimonials.addTestimonial`,
    { apiKey, userId, testimonialText },
    {},
    `write`
  )
}
