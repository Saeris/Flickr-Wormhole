import Flickr from "@/flickr"

async function getContactsPublicPhotos(
  { apiKey = Flickr.apiKey, userId = `` } = {},
  { count = 10, justFriends = false, singlePhoto = false, includeSelf = false, extras = `` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photos.getContactsPublicPhotos`,
    { apiKey, userId },
    { count, justFriends, singlePhoto, includeSelf, extras }
  )
}

export default getContactsPublicPhotos
