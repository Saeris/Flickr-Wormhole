import "isomorphic-fetch"
import { invariant, missingArgument } from "@/utilities"

const snake = str => str.trim().split(``).map(char => (/[A-Z]/.test(char) ? `_${char.toLowerCase()}` : char)).join(``)

export class Flickr {
  constructor(apiKey) {
    invariant(apiKey, missingArgument({ apiKey }))
    this.apiKey = apiKey

    this.loader = new Dataloader(this.fetch.bind(this))
  }

  endpoint = `https://api.flickr.com/services/rest/`

  fetchResource = async(method = ``, args = {}, options = {}, requiresAuth = false) => {
    try {
      const required = Object.entries(args)
        .map(([key, value]) => {
          invariant(value, missingArgument({ [snake(`${key}`)]: key }))
          return `&${snake(`${key}`)}=${value}`
        })
        .join(``)

      const optional = Object.entries(options)
        .map(([key, value]) => (!!value ? `&${snake(`${key}`)}=${value}` : ``))
        .join(``)

      const data = await this.loader.load(`${method}${required}${optional}`)

      if (data.stat === `fail`) throw new Error(data.message)

      info(`Successfully fetched resource: ${method}`, { method, args, options, requiresAuth })
      return data
    } catch (err) {
      error(`Failed to fetch resource: ${method}`, err)
      return {}
    }
  }

  fetch = urls =>
    Promise.all(
      urls.map(url =>
        fetch(`${this.endpoint}?method=${url}&api_key=${this.apiKey}&format=json&nojsoncallback=1`)
          .then(res => res.json()) //eslint-disable-line
      )
    )
}

export default new Flickr(FLICKR_API_KEY)
