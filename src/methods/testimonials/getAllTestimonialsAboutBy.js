import Flickr from "@/flickr"

export default async function getAllTestimonialsAboutBy({ apiKey = Flickr.apiKey, userId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.testimonials.getAllTestimonialsAboutBy`, { apiKey, userId }, {}, `read`)
}
