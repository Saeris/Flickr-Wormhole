import Flickr from "@/flickr"

export default function setPerms(
  { flickr = Flickr, photoId = ``, isPublic = 0, isContact = 0, isFriend = 0, isFamily = 0 } = {}
) {
  return flickr.fetchResource(
    `flickr.photos.geo.setPerms`,
    { photoId, isPublic, isContact, isFriend, isFamily },
    {},
    `write`
  )
}
