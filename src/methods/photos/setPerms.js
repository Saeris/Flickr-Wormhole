import Flickr from "@/flickr"

export default async function setPerms(
  { apiKey = Flickr.apiKey, photoId = ``, isPublic = 0, isFriend = 0, isFamily = 0 } = {},
  { permComment = 3, permAddmeta = 3 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photos.setPerms`,
    { apiKey, photoId, isPublic, isFriend, isFamily },
    { permComment, permAddmeta },
    `write`
  )
}
