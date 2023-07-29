import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <Image
          src="/greenGrassMusic.png"
          alt="Music and code are the themes. The background is dark. Green grass. rain. surreal. Technology."
          fill={true}
          className="-z-50"
        />
      </div>
      <div className="text-center">
        <h1 className="text-4xl">Keegan Anglim</h1>
        <h2 className="text-xl">Software Developer</h2>
      </div>
      <div className="flex justify-center">
        <Image
          src="/profile_selfie.jpg"
          alt="headshot of Keegan"
          width={200}
          height={200}
        />

        {/* image here */}
        {/* <h2>About</h2>
        <p>Full stack web developer leveraging extensive experience in music to work collaboratively and creatively. Graduate of the University of Southern California with a Doctorate of Musical Arts. Winner of USC’s Order of the Arête leadership award. Recently earned a certificate in full-stack web development from UCLA Extension, with a focus on HTML, JavaScript, JQuery, CSS, handlebars, React, Express, graphQL, sequelize, mongoose, mySQL, MongoDB and other technologies. Achieved a 99.61% overall grade in the bootcamp. Interested in NextJS, Web3, music, and collaboration.</p> */}
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
  );
}
