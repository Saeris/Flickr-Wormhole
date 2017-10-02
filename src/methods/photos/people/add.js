import Flickr from "@/flickr"

async function add(
  { flickr = Flickr, photoId = ``, userId = `` } = {},
  { personX = ``, personY = ``, personW = ``, personH = `` } = {}
) {
  return await flickr.fetchResource(
    `flickr.photos.people.add`,
    { photoId, userId },
    { personX, personY, personW, personH },
    `write`
  )
}

export default add
