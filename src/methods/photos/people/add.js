import Flickr from "@/flickr"

async function add(
  { apiKey = Flickr.apiKey, photoId = ``, userId = `` } = {},
  { personX = ``, personY = ``, personW = ``, personH = `` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photos.people.add`,
    { apiKey, photoId, userId },
    { personX, personY, personW, personH },
    `write`
  )
}

export default add
