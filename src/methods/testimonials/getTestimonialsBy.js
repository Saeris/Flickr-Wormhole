import Flickr from "@/flickr"

async function getTestimonialsBy({ flickr = Flickr, userId = `` } = {}, { page = 1, perPage = 10 } = {}) {
  return await flickr.fetchResource(`flickr.testimonials.getTestimonialsBy`, { userId }, { page, perPage })
}

export default getTestimonialsBy
