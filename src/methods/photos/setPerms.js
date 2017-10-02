import Flickr from "@/flickr"

async function setPerms(
  { flickr = Flickr, photoId = ``, isPublic = 0, isFriend = 0, isFamily = 0 } = {},
  { permComment = 3, permAddmeta = 3 } = {}
) {
  return await flickr.fetchResource(
    `flickr.photos.setPerms`,
    { photoId, isPublic, isFriend, isFamily },
    { permComment, permAddmeta },
    `write`
  )
}

export default setPerms
