import Flickr from "@/flickr"

async function getAllTestimonialsAboutBy({ apiKey = Flickr.apiKey, userId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.testimonials.getAllTestimonialsAboutBy`, { apiKey, userId }, {}, `read`)
}

export default getAllTestimonialsAboutBy
