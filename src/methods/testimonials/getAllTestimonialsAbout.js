import Flickr from "@/flickr"

async function getAllTestimonialsAbout({ flickr = Flickr, userId = `` } = {}, { page = 1, perPage = 10 } = {}) {
  return await flickr.fetchResource(
    `flickr.testimonials.getAllTestimonialsAbout`,
    { userId },
    { page, perPage },
    `read`
  )
}

export default getAllTestimonialsAbout
