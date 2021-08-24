import axios from 'axios'
let apiData = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fe80a480-48d1-448c-9ece-4b775eecbcfc/test_news.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210823T160838Z&X-Amz-Expires=86400&X-Amz-Signature=624f239ac58cda8451bb80262209906ed828fd8197344f688d2c6aef9e9b0e4d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test_news.json%22';


export const api = axios.create({
  baseURL: apiData,
  headers: {
    'Content-Type': 'application/json'
  },
})
