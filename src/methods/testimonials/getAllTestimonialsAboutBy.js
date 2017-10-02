import Flickr from "@/flickr"

async function getAllTestimonialsAboutBy({ flickr = Flickr, userId = `` } = {}) {
  return await flickr.fetchResource(`flickr.testimonials.getAllTestimonialsAboutBy`, { userId }, {}, `read`)
}

export default getAllTestimonialsAboutBy
