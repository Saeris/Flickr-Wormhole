import Flickr from "@/flickr"

async function add({ apiKey = Flickr.apiKey, groupId = ``, subject = ``, message = `` } = {}) {
  return await Flickr.fetchResource(
    `flickr.groups.discuss.topics.add`,
    { apiKey, groupId, subject, message },
    {},
    `write`
  )
}

export default add
