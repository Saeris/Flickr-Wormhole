import Flickr from "@/flickr"

export default async function getTestimonialsAboutBy({ apiKey = Flickr.apiKey, userId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.testimonials.getTestimonialsAboutBy`, { apiKey, userId }, {}, `read`)
}
