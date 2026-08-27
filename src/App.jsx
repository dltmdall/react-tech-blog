import Header from "./components/Header.jsx";
import PostList from "./components/PostList.jsx";
import Profile from "./components/Profile.jsx";
import { posts } from "./data/posts.js";

function App() {
  return (
    <>
      <Header />
      <main>
        <Profile
          name="이승미"
          description="React를 배우며 직접 만든 결과와 학습 과정을 기록합니다."
        />
        <PostList posts={posts} />
      </main>
      <footer>
        <small>© 2026 Seung Mi Lee</small>
      </footer>
    </>
  )
}

export default App
