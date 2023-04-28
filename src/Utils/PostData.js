/* eslint-disable no-unused-vars */
import axios from 'axios';
/**
 * @param postData : 서버에 전송할 데이터 Object.
 * @param postUrl  : 타겟 URL
 * TODO
 * 1) 어떤 기준으로 URL을 나눌지.(Login, addhist) => 파라미터로 받기.
 * 2) 로그인시 생긴 JWT 토큰을 헤더에 담는 작업이 필요.(로그인먼저 JWT 구현)
 */

const PostData = (postUrl, postData) => {
  console.log(postData);
  axios.post(postUrl, postData)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
export default PostData;
