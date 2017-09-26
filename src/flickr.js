import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"

const snake = str =>
  str.trim().split(``).map(char => (/[A-Z]/.test(char) ? `_${char.toLowerCase()}` : char)).join(``)

class Flickr {
  constructor(apiKey) {
    this.apiKey = apiKey
  }

  endpoint = `https://api.flickr.com/services/rest/`

  async fetchResource(method = ``, args = {}, options = {}, requiresAuth = false) {
    const required = Object.entries(args)
      .map(([key, value]) => {
        invariant(value, missingArgument({[snake(`${key}`)]: key}))
        return `&${snake(`${key}`)}=${value}`
      })
      .join(``)

    const optional = Object.entries(options)
      .map(([key, value]) => !!value ? `&${snake(`${key}`)}=${value}` : ``)
      .join(``)

    return await fetch(`${this.endpoint}?method=${method}${required}${optional}&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then((data) => {
        if (data.stat === `fail`) throw new Error(data.message)
        return data
      })
      .catch(err => error(`Failed to fetch resource: ${method}`, err))
      .finally(info(`Successfully fetched resource: ${method}`, { method, args, options, requiresAuth }))
  }
}

export default new Flickr(process.env.FLICKR_API_KEY)
