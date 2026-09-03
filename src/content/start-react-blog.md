## React 프로젝트 구조 이해하기

React 프로젝트를 구성하는 도구의 역할과 화면 렌더링 흐름을 학습했습니다.

- **React:** 컴포넌트 단위로 UI를 만드는 JavaScript 라이브러리
- **Vite:** 개발 서버를 실행하고 코드를 배포 가능한 형태로 빌드하는 개발 도구. 실행 환경 자체는 아니다.
- **Node.js:** 브라우저 밖에서 JavaScript와 Vite 같은 개발 도구를 실행하는 환경
- **npm:** 패키지를 설치·관리하고 `npm run dev`, `npm run build` 같은 scripts를 실행하는 도구
- **렌더링 흐름:** `index.html`이 `#root` 공간과 `main.jsx` 진입점을 제공한다. `main.jsx`는 `App` 컴포넌트를 가져와 `#root`에 렌더링한다. `App.jsx`는 화면 구조인 JSX를 반환하며 React가 이를 브라우저 DOM에 반영한다.
- **lint와 build:** lint는 코드를 실행하지 않고 문법 오류와 실수하기 쉬운 패턴을 검사한다. build는 코드를 최적화·압축해 배포 가능한 파일을 생성한다.


## 작성한 핵심 코드

```jsx
function App() {
  return (
    <main>
      <h1>승미의 기술 블로그</h1>
      <p>배운 내용을 기록하는 개발 블로그입니다.</p>
    </main>
  )
}

export default App
```
