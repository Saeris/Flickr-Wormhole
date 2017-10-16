import Flickr from "@/flickr"

export default function editCoords(
  { flickr = Flickr, photoId = ``, userId = ``, personX = ``, personY = ``, personW = ``, personH = `` } = {}
) {
  return flickr.fetchResource(
    `flickr.photos.people.editCoords`,
    { photoId, userId, personX, personY, personW, personH },
    {},
    `write`
  )
}
