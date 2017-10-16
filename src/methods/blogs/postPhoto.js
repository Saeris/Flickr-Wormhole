import Flickr from "@/flickr"

export default function postPhoto(
  { flickr = Flickr, photoId = ``, title = ``, description = `` } = {},
  { blogId = ``, blogPassword = ``, service = `` } = {}
) {
  return flickr.fetchResource(
    `flickr.blogs.postPhoto`,
    { photoId, title, description },
    { blogId, blogPassword, service },
    `write`
  )
}
