# 주소 문자열과 요청 파라미터 다루기
1. url 모듈을 이용하여 주소 문자열을 url 객체로 변환
- url 모듈
  - parse() : 주소 문자열을 파싱하여 url 객체를 만들어 줌
  - format() : url 객체를 주소 문자열로 변환함
- querystring 모듈
  - parse() : 요청 파라미터 문자열을 파싱하여 요청 파라미터 객체로 만들어 줌
  - stringify() : 요청 파라미터 객체를 문자열로 변환 함 
  
2. 이벤트 이해하기
- 이벤트를 처리하는 EventEmitter의 주요 메서드
  - on(event, listener) : 지정한 이벤터의 리스너를 추가
  - once(event, listener) : 지정한 이벤트의 리스터를 추가하지만 한번 실행한 후에는 자동으로 리스너가 제거 됨
  - removeListener(event, listener) : 지정한 이벤트에 대한 리스너를 제거함.
