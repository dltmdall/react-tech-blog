import { Link } from "react-router"
import { useEffect } from "react"

function NotFoundPage() {
  useEffect(() => {
    document.title = "페이지를 찾을 수 없습니다"
  }, [])

  return (
    <section>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <p>요청한 주소를 다시 확인해주세요.</p>
      <Link to="/">홈으로 돌아가기</Link>
    </section>
  )
}

export default NotFoundPage
