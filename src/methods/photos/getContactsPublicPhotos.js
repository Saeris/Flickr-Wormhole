import Flickr from "@/flickr"

async function getContactsPublicPhotos(
  { flickr = Flickr, userId = `` } = {},
  { count = 10, justFriends = false, singlePhoto = false, includeSelf = false, extras = `` } = {}
) {
  return await flickr.fetchResource(
    `flickr.photos.getContactsPublicPhotos`,
    { userId },
    { count, justFriends, singlePhoto, includeSelf, extras }
  )
}

export default getContactsPublicPhotos
