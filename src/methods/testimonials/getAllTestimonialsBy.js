import Flickr from "@/flickr"

async function getAllTestimonialsBy({ apiKey = Flickr.apiKey, userId = `` } = {}, { page = 1, perPage = 10 } = {}) {
  return await Flickr.fetchResource(
    `flickr.testimonials.getAllTestimonialsBy`,
    { apiKey, userId },
    { page, perPage },
    `read`
  )
}

export default getAllTestimonialsBy
