import { Link } from 'react-router'

function PostItem({ post }) {
  const { title, date, description, tags, slug } = post

  return (
    <article className="post-item">
      <h3>
        <Link to={`/posts/${slug}`}>{title}</Link>
      </h3>
      <time className="post-date" dateTime={date}>{date}</time>
      <p className="post-description">{description}</p>
      <p className="post-tags">{tags.join(", ")}</p>
    </article>
  )
}

export default PostItem
