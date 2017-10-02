import Flickr from "@/flickr"

async function getPendingTestimonialsAbout({ flickr = Flickr, userId = `` } = {}, { page = 1, perPage = 10 } = {}) {
  return await flickr.fetchResource(
    `flickr.testimonials.getPendingTestimonialsAbout`,
    { userId },
    { page, perPage },
    `read`
  )
}

export default getPendingTestimonialsAbout
