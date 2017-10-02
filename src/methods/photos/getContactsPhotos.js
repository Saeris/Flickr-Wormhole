import Flickr from "@/flickr"

async function getContactsPhotos(
  { flickr = Flickr } = {},
  { count = 10, justFriends = false, singlePhoto = false, includeSelf = false, extras = `` } = {}
) {
  return await flickr.fetchResource(
    `flickr.photos.getContactsPhotos`,
    {},
    { count, justFriends, singlePhoto, includeSelf, extras },
    `read`
  )
}

export default getContactsPhotos
