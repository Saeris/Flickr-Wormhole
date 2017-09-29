import Flickr from "@/flickr"

async function getPendingTestimonialsAboutBy(
  { apiKey = Flickr.apiKey, userId = `` } = {},
  { page = 1, perPage = 10 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.testimonials.getPendingTestimonialsAboutBy`,
    { apiKey, userId },
    { page, perPage },
    `read`
  )
}

export default getPendingTestimonialsAboutBy
