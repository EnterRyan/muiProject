import API from './config';
/**
 * @param userInputObj : 서버에 전송할 데이터 Object. 첫번째 데이터는 POST 목적임.
 * TODO
 * 1) 오브젝트의 첫 번째 데이터를 키로 URL을 가져옴. (Login,addHistory,fixHistory)
 * 2) History에 해당하면, 사용자 입력시간을 DB에 저장할 폼(YYYY-MM-DD)형태로 변환시켜야 할듯.
 */
const checkURL = (inputType) => {
  let url;
  switch (inputType) {
    case 'ADDHIST':
      url = API.ADDHIST;
      break;
    case 'MODHIST':
      url = API.MODHIST;
      break;
    default:
      url = './404';
  }
  return url;
};
const PostData = (userInputObj) => {
  console.log(userInputObj);
  const API_URL = checkURL(userInputObj.inputType);
  console.log(API_URL);
};
export default PostData;
