import Flickr from "@/flickr"

async function getTestimonialsAboutBy({ apiKey = Flickr.apiKey, userId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.testimonials.getTestimonialsAboutBy`, { apiKey, userId }, {}, `read`)
}

export default getTestimonialsAboutBy
