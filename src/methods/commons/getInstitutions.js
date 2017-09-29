import Flickr from "@/flickr"

async function getInstitutions({ apiKey = Flickr.apiKey } = {}) {
  return await Flickr.fetchResource(`flickr.commons.getInstitutions`, { apiKey })
}

export default getInstitutions
