import Flickr from "@/flickr"

async function getTestimonialsAbout({ flickr = Flickr, userId = `` } = {}, { page = 1, perPage = 10 } = {}) {
  return await flickr.fetchResource(`flickr.testimonials.getTestimonialsAbout`, { userId }, { page, perPage })
}

export default getTestimonialsAbout
