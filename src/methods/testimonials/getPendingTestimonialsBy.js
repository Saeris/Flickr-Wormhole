import Flickr from "@/flickr"

export default async function getPendingTestimonialsBy(
  { apiKey = Flickr.apiKey, userId = `` } = {},
  { page = 1, perPage = 10 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.testimonials.getPendingTestimonialsBy`,
    { apiKey, userId },
    { page, perPage },
    `read`
  )
}
