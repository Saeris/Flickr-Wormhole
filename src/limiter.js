import rateLimit from "hapi-rate-limit"

export default {
  register: rateLimit,
  options: {
    enabled: false,
    pathLimit: false
  }
}
