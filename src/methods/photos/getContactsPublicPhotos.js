import Flickr from "@/flickr"

export default function getContactsPublicPhotos(
  { flickr = Flickr, userId = `` } = {},
  { count = 10, justFriends = false, singlePhoto = false, includeSelf = false, extras = `` } = {}
) {
  return flickr.fetchResource(
    `flickr.photos.getContactsPublicPhotos`,
    { userId },
    { count, justFriends, singlePhoto, includeSelf, extras }
  )
}
