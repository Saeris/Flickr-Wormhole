import Flickr from "@/flickr"

export default async function editTestimonial(
  { apiKey = Flickr.apiKey, userId = ``, testimonialId = ``, testimonialText = `` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.testimonials.editTestimonial`,
    { apiKey, testimonialId, testimonialText },
    {},
    `write`
  )
}
