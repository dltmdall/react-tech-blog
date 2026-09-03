import Profile from '../components/Profile.jsx'
import PostList from '../components/PostList.jsx'

function HomePage({ posts }) {
  return (
    <>
      <Profile
        name="이승미"
        description="React를 배우며 직접 만든 결과와 학습 과정을 기록합니다."
      />
      <PostList posts={posts} />
    </>
  )
}

export default HomePage
