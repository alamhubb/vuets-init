import Axios from 'axios'

const http = Axios.create({
  timeout: 60 * 1000,
})

export default http
