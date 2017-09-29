import Flickr from "@/flickr"

async function editMeta({ apiKey = Flickr.apiKey, photosetId = ``, title = `` } = {}, { description = `` } = {}) {
  return await Flickr.fetchResource(
    `flickr.photosets.editMeta`,
    { apiKey, photosetId, title },
    { description },
    `write`
  )
}

export default editMeta
