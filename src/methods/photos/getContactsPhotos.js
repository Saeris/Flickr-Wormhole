import Flickr from "@/flickr"

export default async function getContactsPhotos(
  { apiKey = Flickr.apiKey } = {},
  { count = 10, justFriends = false, singlePhoto = false, includeSelf = false, extras = `` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photos.getContactsPhotos`,
    { apiKey },
    { count, justFriends, singlePhoto, includeSelf, extras },
    `read`
  )
}
