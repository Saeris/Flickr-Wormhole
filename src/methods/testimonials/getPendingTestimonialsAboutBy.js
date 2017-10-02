import Flickr from "@/flickr"

async function getPendingTestimonialsAboutBy({ flickr = Flickr, userId = `` } = {}, { page = 1, perPage = 10 } = {}) {
  return await flickr.fetchResource(
    `flickr.testimonials.getPendingTestimonialsAboutBy`,
    { userId },
    { page, perPage },
    `read`
  )
}

export default getPendingTestimonialsAboutBy
