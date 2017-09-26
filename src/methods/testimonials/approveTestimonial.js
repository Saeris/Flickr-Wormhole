import Flickr from "@/flickr"

export default async function approveTestimonial({ apiKey = Flickr.apiKey, testimonialId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.testimonials.approveTestimonial`, { apiKey, testimonialId }, {}, `write`)
}
