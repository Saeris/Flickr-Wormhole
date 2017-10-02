import Flickr from "@/flickr"

async function getPendingTestimonialsBy({ flickr = Flickr, userId = `` } = {}, { page = 1, perPage = 10 } = {}) {
  return await flickr.fetchResource(
    `flickr.testimonials.getPendingTestimonialsBy`,
    { userId },
    { page, perPage },
    `read`
  )
}

export default getPendingTestimonialsBy
