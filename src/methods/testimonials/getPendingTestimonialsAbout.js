import Flickr from "@/flickr"

async function getPendingTestimonialsAbout(
  { apiKey = Flickr.apiKey, userId = `` } = {},
  { page = 1, perPage = 10 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.testimonials.getPendingTestimonialsAbout`,
    { apiKey, userId },
    { page, perPage },
    `read`
  )
}

export default getPendingTestimonialsAbout
