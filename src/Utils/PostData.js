/* eslint-disable no-unused-vars */
import axios from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
/**
 * @param postData : 서버에 전송할 데이터 Object.
 * @param postUrl  : 타겟 URL
 * TODO
 * 1) 어떤 기준으로 URL을 나눌지.(Login, addhist)
 */

const PostData = (postUrl, postData) => {
  axios.post(postUrl, postData, { withCredentials: true })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
export default PostData;
