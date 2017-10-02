import Flickr from "@/flickr"

async function echo({ flickr = Flickr } = {}) {
  return await flickr.fetchResource(`flickr.test.echo`)
}

export default echo
