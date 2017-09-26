import Flickr from "@/flickr"

export default async function getList(
  { apiKey = Flickr.apiKey, groupId = `` } = {},
  { membertypes = 0, page = 1, perPage = 100 } = {}
) {
  return await Flickr.fetchResource(
    `flickr.groups.members.getList`,
    { apiKey, groupId },
    { membertypes, page, perPage },
    `read`
  )
}
