import Flickr from "@/flickr"

export default async function leave({ apiKey = Flickr.apiKey, groupId = `` } = {}, { deletePhotos = `` } = {}) {
  return await Flickr.fetchResource(`flickr.groups.leave`, { apiKey, groupId }, { deletePhotos }, `delete`)
}
