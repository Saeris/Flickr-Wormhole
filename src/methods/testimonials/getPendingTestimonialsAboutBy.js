import Flickr from "@/flickr"

export default function getPendingTestimonialsAboutBy(
  { flickr = Flickr, userId = `` } = {},
  { page = 1, perPage = 10 } = {}
) {
  return flickr.fetchResource(
    `flickr.testimonials.getPendingTestimonialsAboutBy`,
    { userId },
    { page, perPage },
    `read`
  )
}
