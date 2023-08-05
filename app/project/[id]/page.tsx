import db from "@/lib/db";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default async function Project({ params }: { params: { id: string } }) {
  console.log(params.id);
  const res = await db.project.findFirst({
    where: {
      id: params.id,
    },
  });
  console.log(res);
  if (!res) {
    return <>nothing to see here</>;
  }

  return (
    <main className="my-12">
      <div className="text-center">
        <h1 className="text-4xl">{res.title}</h1>
      </div>
      <div className="flex justify-center">
        <div className="mt-6 w-[280px]">
          <h2 className="text-center text-xl text-">Technologies used</h2>
          <div className="text-center p-2">{res.technologies}</div>
        </div>
      </div>
      <section id="concept">
        <div id="image" className="flex flex-row justify-center items-center">
          <div className="w-[280px] border-2">
            <Image src={res.thumbnail} alt={res.alt} width={400} height={400} />
          </div>
        </div>
        <div id="app-idea" className="px-3 mt-12">
          <h3 className="text-2xl mb-2 border-b ">Concept</h3>
          <p className="text-xl">{res.concept}</p>
        </div>
      </section>
      {/* Process and technologies used */}
      <section className="flex flex-col items-center mt-12">
        <div className="w-[280px] border-2">
          <Image
            src={res.screenShot1 as string}
            alt={"screenshot of app"}
            width={400}
            height={400}
          />
        </div>
        <div id="app-idea" className="px-3 mt-12">
          <h3 className="text-2xl mb-2 border-b">Process</h3>
          <p className="text-xl">{res.process}</p>
        </div>
      </section>
      {/* Challenges, learnings, and Current Status */}
      <section className="flex flex-col items-center mt-12">
        <div className="w-[280px] border-2">
          <Image
            src={res.screenShot2 as string}
            alt={"screenshot of app"}
            width={400}
            height={400}
          />
        </div>
        <div id="app-idea" className="px-3 mt-12">
          <h3 className="text-2xl mb-2 border-b">Challenges</h3>
          <p className="text-xl">{res.challenges}</p>
        </div>
        <div className="w-[280px] border-2 mt-12">
          <Image
            src={res.screenShot3 as string}
            alt={"screenshot of app"}
            width={400}
            height={400}
          />
          </div>
      </section>
      {/* Links */}
      <section>
        <h4 className="text-2xl mt-12 mb-2 border-b">Project Links</h4>
        <a href={res?.githubUrl ? res.githubUrl : "#"}>
          <FaGithub />
        </a>
        <a href={res?.liveUrl ? res.liveUrl : "#"}>live project</a>
        <a href={res?.demoUrl ? res.demoUrl : "#"}>demo video</a>
      </section>
    </main>
  );
}
