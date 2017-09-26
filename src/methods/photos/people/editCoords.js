import Flickr from "@/flickr"

export default async function editCoords(
  { apiKey = Flickr.apiKey, photoId = ``, userId = ``, personX = ``, personY = ``, personW = ``, personH = `` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photos.people.editCoords`,
    { apiKey, photoId, userId, personX, personY, personW, personH },
    {},
    `write`
  )
}
