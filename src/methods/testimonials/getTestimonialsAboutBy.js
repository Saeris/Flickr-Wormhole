import Flickr from "@/flickr"

async function getTestimonialsAboutBy({ flickr = Flickr, userId = `` } = {}) {
  return await flickr.fetchResource(`flickr.testimonials.getTestimonialsAboutBy`, { userId }, {}, `read`)
}

export default getTestimonialsAboutBy
