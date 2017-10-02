import Flickr from "@/flickr"

async function getList({ flickr = Flickr } = {}, { date = ``, extras = ``, page = 1, perPage = 100 } = {}) {
  return await flickr.fetchResource(`flickr.interestingness.getList`, {}, { date, extras, page, perPage })
}

export default getList
