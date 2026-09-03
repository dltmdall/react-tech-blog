import { Link } from "react-router"

function Header() {
  return (
    <header>
      <Link to="/">승미의 기술 블로그</Link>
      <nav aria-label="주요 메뉴">
        <ul>
          <li><Link to="/#posts">글</Link></li>
          <li><Link to="/#about">소개</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
