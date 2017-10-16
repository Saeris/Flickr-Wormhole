import Flickr from "@/flickr"

export default function getContactsPhotos(
  { flickr = Flickr } = {},
  { count = 10, justFriends = false, singlePhoto = false, includeSelf = false, extras = `` } = {}
) {
  return flickr.fetchResource(
    `flickr.photos.getContactsPhotos`,
    {},
    { count, justFriends, singlePhoto, includeSelf, extras },
    `read`
  )
}
