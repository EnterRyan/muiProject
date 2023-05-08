# 내용정리.

---

##### 1. (개발환경)React 라이브 서버와 express 서버의 Proxy설정.

> #### 사용하는 라이브러리.
>
> - http-proxy-middleware
>
> #### 사용법.
>
> 1. 라이브러리 설치 이후, react 프로젝트 최상위 디렉토리에 setupProxy.js파일 생성.
> 2. app.use 함수의 첫 번째 파라미터로 createProxyMiddleware 함수와 매개변수로 배열선언.
>    > ```javascript
>    > app.use(createProxyMiddleware(["/API1", "/API2"], {}));
>    > ```
> 3. app.use 함수의 두 번째 파라미터로 서버의 타겟url과 CORS 허용에 대한 내용 기술
>    > ```javascript
>    > target: SERVER_URL,
>    > changeOrigin: true,
>    > ```
>
> #### 주의사항.
>
> 1. 프록시의 개념은 특정 URL로 들어오는 request를 특정 URL로 변경해주는 우회의 역이다.
>    여기서 중요한것은 target을 A URL로 지정했으면 react 프로젝트 내에서 A를 가르키는 것이
>    아닌 같은 서버내에 있다는 가정하에 react 서버를 가르키게 해야한다.
> 2. setupProxy.js의 내용은 변경하면 react 라이브 서버를 꼭 재기동 해야 적용된다.
>    express 서버의 nodemon은 express 서버만 재기동 시키는 것으로 react라이브 서버는 절대 반영이 되지않음을 주의!.
>    <br>
