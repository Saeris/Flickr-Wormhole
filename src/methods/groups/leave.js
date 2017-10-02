import Flickr from "@/flickr"

async function leave({ flickr = Flickr, groupId = `` } = {}, { deletePhotos = `` } = {}) {
  return await flickr.fetchResource(`flickr.groups.leave`, { groupId }, { deletePhotos }, `delete`)
}

export default leave
