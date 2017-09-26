import Flickr from "@/flickr"

export default async function getAllTestimonialsAbout(
  { apiKey = Flickr.apiKey, userId = `` } = {},
  { page = 1, perPage = 10 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.testimonials.getAllTestimonialsAbout`,
    { apiKey, userId },
    { page, perPage },
    `read`
  )
}
