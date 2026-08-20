function App() {
  return (
    <>
      <header>
        <a href="/">승미의 기술 블로그</a>
        <nav aria-label="주요 메뉴">
          <ul>
            <li><a href="#posts">글</a></li>
            <li><a href="#about">소개</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h1>안녕하세요, 이승미입니다.</h1>
          <p>React를 배우며 직접 만든 결과와 학습 과정을 기록합니다.</p>
        </section>
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
