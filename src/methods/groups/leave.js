import Flickr from "@/flickr"

export default function leave({ flickr = Flickr, groupId = `` } = {}, { deletePhotos = `` } = {}) {
  return flickr.fetchResource(`flickr.groups.leave`, { groupId }, { deletePhotos }, `delete`)
}
