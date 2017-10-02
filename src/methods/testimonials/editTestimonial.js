import Flickr from "@/flickr"

async function editTestimonial({ flickr = Flickr, userId = ``, testimonialId = ``, testimonialText = `` } = {}) {
  return await flickr.fetchResource(
    `flickr.testimonials.editTestimonial`,
    { testimonialId, testimonialText },
    {},
    `write`
  )
}

export default editTestimonial
