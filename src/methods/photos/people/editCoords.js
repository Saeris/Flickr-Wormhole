import Flickr from "@/flickr"

async function editCoords(
  { flickr = Flickr, photoId = ``, userId = ``, personX = ``, personY = ``, personW = ``, personH = `` } = {}
) {
  return await flickr.fetchResource(
    `flickr.photos.people.editCoords`,
    { photoId, userId, personX, personY, personW, personH },
    {},
    `write`
  )
}

export default editCoords
