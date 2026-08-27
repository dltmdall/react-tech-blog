import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Profile
          name="이승미"
          description="React를 배우며 직접 만든 결과와 학습 과정을 기록합니다."
        />
        <section id="posts">
          <h2>최근 글</h2>
          <p>게시글 목록은 다음 단계에서 추가할 예정입니다.</p>
        </section>
      </main>
      <footer>
        <small>© 2026 Seung Mi Lee</small>
      </footer>
    </>
  )
}

export default App
