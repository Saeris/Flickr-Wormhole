import Flickr from "@/flickr"

export default function echo({ flickr = Flickr } = {}) {
  return flickr.fetchResource(`flickr.test.echo`)
}
