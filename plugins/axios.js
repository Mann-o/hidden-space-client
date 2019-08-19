export default function ({ app: { $axios } }) {
  $axios.onRequest((config) => {
    console.log(config)
    return config
  })

  $axios.onResponse((response) => {
    console.log(response)
    return response
  })

  $axios.onError((err) => {
    console.log(err)
    return Promise.reject(err)
  })
}
