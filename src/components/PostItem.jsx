function PostItem({ post }) {
  const { title, date, description, tags } = post

  return (
    <article className="post-item">
      <h3>{title}</h3>
      <time className="post-date" dateTime={date}>{date}</time>
      <p className="post-description">{description}</p>
      <p className="post-tags">{tags.join(", ")}</p>
    </article>
  )
}

export default PostItem
