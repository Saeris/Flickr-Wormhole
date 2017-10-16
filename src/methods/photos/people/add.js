import Flickr from "@/flickr"

export default function add(
  { flickr = Flickr, photoId = ``, userId = `` } = {},
  { personX = ``, personY = ``, personW = ``, personH = `` } = {}
) {
  return flickr.fetchResource(
    `flickr.photos.people.add`,
    { photoId, userId },
    { personX, personY, personW, personH },
    `write`
  )
}
