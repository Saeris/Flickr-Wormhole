import Flickr from "@/flickr"

async function getList({ apiKey = Flickr.apiKey } = {}, { date = ``, extras = ``, page = 1, perPage = 100 } = {}) {
  return await Flickr.fetchResource(`flickr.interestingness.getList`, { apiKey }, { date, extras, page, perPage })
}

export default getList
