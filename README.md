## 💪🏻 롯데헬스케어
롯데헬스케어 [웹 프론트앤드 엔지니어]직무 사전 과제 프로젝트입니다.

![예시 이미지](https://i.ibb.co/fFF3ZX3/image.png)


## 00.이름
조민주


## 01. 개발환경
- node.js v18.18.0
- vite v5.0.7
- React v18.2.0



## 02. 프로젝트 실행방법
### 의존성 패키지 실행
```bash
yarn install
```
### 개발 환경 실행
``` bash
yarn dev
````

## 03. 프로젝트 구조 설명
```
📦public                 // 정적 데이터 보관
 ┣ 📂data                // MockData
 ┗ 📜favicon.ico
 📦src
 ┣ 📂api                 // MockData와 통신할 API
 ┣ 📂assets              // project image 보관
 ┃ ┗ 📂images
 ┣ 📂atoms               // Atom을 사용하여 상태관리할 코드 작성
 ┣ 📂components          // 각 페이지에서 필요한 컴포넌트와 공용 컴포넌트 선언
 ┃ ┣ 📂button
 ┃ ┣ 📂home
 ┃ ┣ 📂icon
 ┃ ┣ 📂input
 ┃ ┣ 📂logo
 ┃ ┣ 📂router
 ┃ ┣ 📂sign
 ┃ ┣ 📂text
 ┃ ┗ 📜index.ts
 ┣ 📂hooks               // custom hook 구현 (useInput...)
 ┣ 📂layouts             // 공용으로 사용하게 될 페이지 레이아웃 구선
 ┣ 📂pages               // 페이지
 ┃ ┣ 📂home
 ┃ ┣ 📂signIn
 ┃ ┗ 📂signUp
 ┣ 📂services            // --미사용--
 ┣ 📂styles              // 공용 style 보관
 ┣ 📂utils               // 공용 함수 보관
 ┣ 📜App.css.ts
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

## 04. 각 기능 설명
> 1️⃣ 로그인 페이지
- <u>회원가입</u> 텍스트 버튼 클릭 시 회원가입 페이지로 이동
- 이메일로 로그인 버튼 클릭 시 로그인 기능 연결
- 로그인 후 홈페이지로 이동

> 2️⃣ 회원가입 페이지
- <u>로그인</u> 텍스트 버튼 클릭 시 로그인 페이지로 이동
- 아이디/비밀번호/이름 별 유효성 체크 실행
- 모든 유효성 체크 통과 시 회원가입 버튼 활성화
- 이미 가입된 계정으로 가입 시 중복 체크
- 가입 후 로그인 페이지로 이동

> 3️⃣ 홈 페이지
- 상단 우측 로그아웃 버튼 클릭 시 로그아웃 처리 및 로그인 페이지로 이동
- 찜하기 버튼 클릭 시 찜 변경
- 회원명과 회원 걸음수, 포인트 상단 노출

> 4️⃣ 공용 기능
- 회원 데이터에 존재하는 token값이 유효하지 않은 경우 로그인 페이지로 이동
- 회원 데이터를 비교할 수 있는 값인 token 값이 localStorage에 존재하지 않을 경우 로그인 페이지로 이동
- 페이지의 가로 사이즈 별 콘텐츠영역의 넓이가 다르게 설정되어있습니다.



## 05. 라이브러리 및 프레임워크 관련
- **ESlint, prettier** : 일관성 있는 코딩 스타일과 코드 품질을 유지하기 위해 ESLint와 Prettier를 함께 사용했습니다.
- **jotai, jotai-immer** : 타입스크립트를 지원하며, 상태 관리의 복잡성을 감소시킬 수 있으며, 이 후 유저정보를 사용하거나 등의 기능 추가가 존재할 경우의 확장성을 고려하여 사용하였습니다.
- **vanilla-extract** : 여러 패키지를 사용할 수 있으며, 로컬 슼코프 클래스로 이름이 동일할 경우에 대한 고민을 해결할 수 있으며 타입스크립트를 지원하여 type-safe하도록 스타일을 관리할 수 있어 사용했습니다.
- **vite** : HMR을 사용하여 애플리케이션을 다시 시작하지 않고 변경된 일부만 빠르게 확인할 수 있어 vite를 사용하여 react를 초기구성하였습니다.

