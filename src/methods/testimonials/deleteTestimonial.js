import Flickr from "@/flickr"

export default async function deleteTestimonial({ apiKey = Flickr.apiKey, testimonialId = `` } = {}) {
  return await Flickr.fetchResource(`flickr.testimonials.deleteTestimonial`, { apiKey, testimonialId }, {}, `write`)
}
