import db from "@/lib/db"
import { FaGithub } from "react-icons/fa"

export default async function Project({ params }: { params: { id: string } }) {
    console.log(params.id)
  const res = await db.project.findFirst({
    where: {
        id: params.id
    }
  });
  console.log(res)
  if (!res){
    return <>nothing to see here</>
  }

  return (
  <main>
    <div>
        <h1>{res.title}</h1>
    </div>
    <div>
        <h2>Technologies used</h2>
        <p>{res.technologies}</p>
    </div>
    <section id="concept">
        <div id="image"></div>
        <div id="app-idea">
            <p>{res.concept}</p>
        </div>
    </section>
    {/* Process and technologies used */}
    <section>
        <div>
            <p>{res.process}</p>
        </div>
        <div></div>
    </section>
    {/* Challenges, learnings, and Current Status */}
    <section>
        <div></div>
        <div>
            <p>{res.challenges}</p>
        </div>
    </section>
    {/* Links */}
    <section>
        <h2>Project Links</h2>
        <a href={res?.githubUrl ? res.githubUrl : "#"}><FaGithub /></a>
        <a href={res?.liveUrl ? res.liveUrl : "#"}>live project</a>
        <a href={res?.demoUrl ? res.demoUrl : "#"}>demo video</a>
    </section>
  </main>
)}
