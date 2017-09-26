import Flickr from "@/flickr"

export default async function getInstitutions({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.commons.getInstitutions`, { apiKey })
}
