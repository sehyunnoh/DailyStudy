- 전역 객체
  - console : 콘솔 창에 결과를 보여주는 객체
  - process : 프로세스의 실행에 대한 정보를 다루는 객체
  - exports : 모듈을 다루는 객체

- console 객체 메소드
  - dir(object) : 자바스크립트 객체의 속성들을 출력
  - time(id) : 실행 시간을 측정하기 위한 시작 시간 기록
  - timeEnd(id) : 실행 시간을 측정하기 위한 끝 시간을 기록

- 실행한 파일 정보를 알려주는 전역 변수 
  - __filename : 실행한 파일의 이름을 출력. 파일의 전체 패스가 출력 됨.
  - __dirname : 실행한 파일이 들어 있는 폴더를 출력. 폴더의 전체 패스가 출력 됨.

- process 객체
  - argv : 프로세스를 실행할때 전달되는 파라미터 정보
  - env : 환경 변수 정보
  - exit() : 프로세스를 끝내는 메소드

- 외장 모듈 사용하기
  - nconf : 시스템 환경 변수에 접근 할수 있는 모듈

- 만약 모든 프로젝트에 적용하고 싶으면 [node_modules] 폴더를 상위 폴더로 옮기면 됨.
  
- 내장 모듈
  - 시스템 정보를 알려주는 os 모듈
    - hostname() : 운영체제의 호스트 이름을 알려줌
    - totalmem() : 시스템의 전체 메모리 용량을 알려줌
    - freemem() : 시스템에서 사용 가능한 메모리 용량을 알려줌
    - cpus() : cpu 정보를 알려줌
    - networkInterfaces() : 네트워크 인터페이스 정보를 담은 배열 객체를 반환 함.
  - 파일 패스를 다루는 path 모듈
    - join() : 여러개의 이름들을 모두 합쳐 하나의 파일 패스로 만들어 줌. 
    - dirname() : 파일 패스에서 디렉터리 이름을 반환함. 
    - basename() : 파일 패스에서 파일의 확장자를 제외한 이름을 반환함.
    - extname() : 파일 패스에서 파일의 확장자를 반환 함.
    - 
- 자료형
  - Boolean, Number, String, undefined, null, Object
  - typeof
  - parseInt()
  - parseFloat()
  
- forEach(item, index)
- 배열에 값 추가 및 삭제하기
  - push(object) : 배열의 끝에 요소를 추가
  - pop() : 배열의 끝에 있는 요소를 삭제
  - unshift() : 배열의 앞에 요소를 추가
  - shift() : 배열의 앞에 있는 요소를 삭제
  - splice(index, removeCount, [Object]) : 여러 개의 객체를 요소로 추가하거나 삭제
  - slice(index, copyCount) : 여러개의 요소를 잘라내어 새로운 배열 객체로 만듦
  - delete : 배열안의 정보만 삭제하고, 공간은 그대로 남아 있음.
    - splice를 사용하도록 권장
- 콜백함수
- 클로저(closure)
- Prototype
