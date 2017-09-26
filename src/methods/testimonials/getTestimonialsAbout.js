import Flickr from "@/flickr"

export default async function getTestimonialsAbout(
  { apiKey = Flickr.apiKey, userId = `` } = {},
  { page = 1, perPage = 10 } = {}
) {
  return await Flickr.fetchResource(`flickr.testimonials.getTestimonialsAbout`, { apiKey, userId }, { page, perPage })
}
