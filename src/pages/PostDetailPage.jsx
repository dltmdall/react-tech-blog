import { useParams } from "react-router"
import ReactMarkdown from "react-markdown"
import { useEffect } from "react"

function PostDetailPage({ posts }) {
  const { slug } = useParams()

  const selectedPost = posts.find((post) => post.slug === slug && post.published)

  const pageTitle = selectedPost ? selectedPost.title : "게시글이 존재하지 않습니다"

  useEffect(() => {
    document.title = pageTitle
  }, [pageTitle])

  if (!selectedPost) {
    return (
      <article>
        <h1>게시글을 찾을 수 없습니다.</h1>
        <p>주소를 다시 확인해주세요.</p>
      </article>
    )
  }

  const { title, date, description, tags, content } = selectedPost

  return (
    <article className="post-detail">
      <h1>{title}</h1>
      <time dateTime={date} className="post-detail-date">{date}</time>
      <p className="post-detail-description">{description}</p>
      <p className="post-detail-tags">{tags.join(", ")}</p>
      <div className="post-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  )
}

export default PostDetailPage
