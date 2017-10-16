import Flickr from "@/flickr"

export default function setPerms(
  { flickr = Flickr, photoId = ``, isPublic = 0, isFriend = 0, isFamily = 0 } = {},
  { permComment = 3, permAddmeta = 3 } = {}
) {
  return flickr.fetchResource(
    `flickr.photos.setPerms`,
    { photoId, isPublic, isFriend, isFamily },
    { permComment, permAddmeta },
    `write`
  )
}
