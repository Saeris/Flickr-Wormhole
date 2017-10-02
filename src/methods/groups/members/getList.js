import Flickr from "@/flickr"

async function getList({ flickr = Flickr, groupId = `` } = {}, { membertypes = 0, page = 1, perPage = 100 } = {}) {
  return await flickr.fetchResource(
    `flickr.groups.members.getList`,
    { groupId },
    { membertypes, page, perPage },
    `read`
  )
}

export default getList
