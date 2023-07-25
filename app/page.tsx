import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div>
        {/* image here */}
        <h1>Keegan Anglim</h1>
        <h2>Software Developer</h2>
      </div>
      <div>
      <h2>About</h2>
      <p>statement about me</p>
      </div>
      <div>
        <h3>Projects</h3>
        <div>
          {/* project card components */}
          <div>PocketPr</div>
          <div>Hackathons</div>
          <div>Bootcamp</div>
        </div>
      </div>
    </main>
  )
}
