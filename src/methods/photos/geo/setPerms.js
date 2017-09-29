import Flickr from "@/flickr"

async function setPerms(
  { apiKey = Flickr.apiKey, photoId = ``, isPublic = 0, isContact = 0, isFriend = 0, isFamily = 0 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photos.geo.setPerms`,
    { apiKey, photoId, isPublic, isContact, isFriend, isFamily },
    {},
    `write`
  )
}

export default setPerms
