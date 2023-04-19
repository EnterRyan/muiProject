/**
 * @param postTarget   : 서버에 어떤 POST를 전달할지 구분.
 * @param userInputObj : 서버에 전송할 데이터 Object
 * TODO
 * 1)postTarget을 확인하여 URL을 설정(Login,addHistory,fixHistory)
 * 2)클라이언트가 입력한 내용이 xss공격이 있는지 체크함.
 * 3)History에 해당하면, 사용자 입력시간을 DB에 저장할 폼(YYYY-MM-DD)형태로 변환시켜야 할듯.
 */
const checkTargetURL = (postTarget) => {
  let PostURL = '';
  if (postTarget === 'addhist') { PostURL = './test'; }
  console.log(process.env.REACT_APP_API_HISTORYADD);
  return PostURL;
};

const PostData = (postTarget, userInputData) => {
  const PostURL = checkTargetURL(postTarget);
  console.log(PostURL, userInputData);
  console.log(process.env.REACT_APP_API_HISTORYADD);
};
export default PostData;
