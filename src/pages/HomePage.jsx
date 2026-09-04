import Profile from '../components/Profile.jsx'
import PostList from '../components/PostList.jsx'
import { useEffect } from 'react'

function HomePage({ posts }) {
  useEffect(() => {
    document.title = "승미의 기술 블로그"
  }, [])

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
