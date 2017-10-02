import Flickr from "@/flickr"

async function getInstitutions({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.commons.getInstitutions`)
}

export default getInstitutions
