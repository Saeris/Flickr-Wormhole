import Flickr from "@/flickr"

async function setPerms(
  { flickr = Flickr, photoId = ``, isPublic = 0, isContact = 0, isFriend = 0, isFamily = 0 } = {}
) {
  return await flickr.fetchResource(
    `flickr.photos.geo.setPerms`,
    { photoId, isPublic, isContact, isFriend, isFamily },
    {},
    `write`
  )
}

export default setPerms
