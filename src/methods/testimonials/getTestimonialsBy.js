import Flickr from "@/flickr"

async function getTestimonialsBy({ apiKey = Flickr.apiKey, userId = `` } = {}, { page = 1, perPage = 10 } = {}) {
  return await Flickr.fetchResource(`flickr.testimonials.getTestimonialsBy`, { apiKey, userId }, { page, perPage })
}

export default getTestimonialsBy
