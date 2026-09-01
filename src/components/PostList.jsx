import PostItem from "./PostItem.jsx";

function PostList({ posts }) {
  const publishedPosts = posts.filter((post) => post.published)

  return(
    <section id="posts">
      <h2>최근 글</h2>
      {publishedPosts.length === 0
        ? <p>아직 공개된 게시글이 없습니다.</p>
        : publishedPosts.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
    </section>
  )
}

export default PostList
