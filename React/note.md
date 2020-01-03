## 함수 type vs  class type

## class 밑에 함수는 최신 스펙에서 function 생략 함

## JSX 

- props vs state
- 상위 component가 하위 component에게 data 전달 할때는 props
- 하위 component가 상위 component에게 data 전달 할때는 event

## perfomance
- 전체 다 rendering 되지 않도록
- shouldComponentUpdate(newProps, newState)

## command 
- yarn
  - yarn global add create-react-app
  - yarn start 
  - yarn build
  - npx serve -s build ( build folder를 document로 서버 띄움)
  - deploy to github pages
    - yarn add gh-pages
    - modify package.json file (script 부분)
    - git init
    - copy git remote from github

- npm 
  - npm install -g create-react-app
  - npm run start
  - npm run build
  - npm 
  - deploy to github pages
    - npm install gh-pages
    - modify package.json file

