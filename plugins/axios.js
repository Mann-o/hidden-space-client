export default function ({ app: { $axios } }) {
  $axios.onRequest((config) => {
    return config
  })

  $axios.onResponse((response) => {
    return response
  })

  $axios.onError((err) => {
    return Promise.reject(err)
  })
}
