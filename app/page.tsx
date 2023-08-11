import Footer from '@/components/Footer';
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import db from "@/lib/db";
import Email from '@/components/Email';

async function getData() {
    const res = await db.project.findMany();
    return res;
}

export default async function Home() {
    const data = await getData();
    return (
        <main className='dark:bg-stone-700 bg-rose-100 lg:flex flex-col lg:justify-center lg:items-center mb-12'>
            <Image
                src="/trebleOnLeftGrass-fs8.png"
                alt="Music and code are the themes. The background is dark. Green grass. rain. surreal. Technology."
                quality={100}
                fill
                id="bg-main"
                sizes="100vw"
                style={{
                    objectFit: "cover",
                    zIndex: "0",
                }}
                className="-z-50 fixed"
            />
            <div
                id='hero-div'
                className="z-10 relative text-center my-12 p-4 lg:w-[400px] lg:rounded-sm"
                style={{ backgroundColor: "rgba(41, 37, 36, .8)" }}
            >
                <h1 className="text-4xl">Keegan Anglim</h1>
                <h2 className="text-xl text-main-theme">Software Developer</h2>
            </div>
            <div className="z-30 relative flex justify-center">
                <Image
                    className="rounded-full"
                    src="/profile_selfie.jpg"
                    alt="headshot of Keegan"
                    width={200}
                    height={200}
                />

                {/* image here */}
                {/* <h2>About</h2>
        <p>Full stack web developer leveraging extensive experience in music to work collaboratively and creatively. Graduate of the University of Southern California with a Doctorate of Musical Arts. Winner of USC’s Order of the Arête leadership award. Recently earned a certificate in full-stack web development from UCLA Extension, with a focus on HTML, JavaScript, JQuery, CSS, handlebars, React, Express, graphQL, sequelize, mongoose, mySQL, MongoDB and other technologies. Achieved a 99.61% overall grade in the bootcamp. Interested in NextJS, Web3, music, and collaboration.</p> */}
            </div>
            <div
                id='socials-div'
                style={{ backgroundColor: "rgba(41, 37, 36, .7)" }}
                className="z-30 relative text-white text-4xl flex flex-row gap-4 justify-evenly items-center mt-12 p-6 "
            >
                <a className="active:translate-y-2 transition-transform duration-100" href="https://www.linkedin.com/in/keegananglim"><FaLinkedin /></a>
                <a className="active:translate-y-2 transition-transform duration-100" href="https://www.github.com/guitarkeegan"><FaGithub /></a>
                <Email />
            </div>
            <div className="flex flex-col gap-12 justify-center items-center mt-[200px]">
                <h3 className="text-4xl font-bold">My Work</h3>
                <div className="dark:bg-stone-700 bg-rose-100 flex flex-col md:flex-row md:flex-wrap gap-12 justify-center items-center">
                    {data &&
            data.map((proj, i) => (
                <div id='proj-title' className="dark:bg-stone-700 bg-rose-100 text-center" key={i}>
                    <h1 className="text-2xl">{proj.title}</h1>
                    <div className="rounded-lg md:w-[400px] w-[250px] ">
                        <Link href={`/project/` + proj.id}>
                            <Image
                                alt={proj.alt}
                                src={proj.thumbnail}
                                width={400}
                                height={400}
                                className="dark:bg-stone-800 bg-rose-100 border-2 border-main-theme lg:hover:border-pop transition-colors duration-300 ease-in-out"
                                id='proj-pic'
                            />
                        </Link> 
                    </div>
                </div>
            ))}
                </div>
            </div>
        </main>
    );
}
