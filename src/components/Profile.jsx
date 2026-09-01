function Profile({ name, description }) {
  return (
    <section id="about">
      <h1>안녕하세요, {name}입니다.</h1>
      <p>{description}</p>
    </section>
  )
}

export default Profile
