import Flickr from "@/flickr"

async function getAllTestimonialsBy({ flickr = Flickr, userId = `` } = {}, { page = 1, perPage = 10 } = {}) {
  return await flickr.fetchResource(`flickr.testimonials.getAllTestimonialsBy`, { userId }, { page, perPage }, `read`)
}

export default getAllTestimonialsBy
