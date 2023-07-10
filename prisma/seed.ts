import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){

    console.log("start seeding projects...");
    // create 3 projects
    prisma.project.create({
        data: {
            title: "panda",
            authors: "Keegan Anglim, Daniel Johnson",
            description: "Content creators connect their social media accounts, and gain ai generated insights about their communities, and valuble feedback on their content. I am responsible for designing and implementing many of the features, including api integrations, database management, user data flows, and prompt engineering.",
            role: "CTO, Full Stack Developer",
            liveUrl: "https://foreveryone.ai/panda",
            technologies: "NextJS, Clerk, Supabase, GoogleApis, OpenAi"
        }
    });

    prisma.project.create({
        data: {
            title: "Handshake",
            authors: "Keegan Anglim",
            description: "Two parties decide to enter into an agreement. The terms are signed off on by both parties via smart contract. Once the deal has been fulfilled, both parties must sign the contract again to release the agreed upon payment. Otherwise, the funds will be kept within the contract",
            role: "Smart Contract Developer, Full Stack Developer",
            technologies: "Solidity, Hardhat, Chainlink, NextJS, Tailwind"
        }
    });

    prisma.project.create({
        data: {
            title: "Quack-Planets",
            authors: "Keegan Anglim",
            description: "Hackathon project were each team was tasked with creating an educational site about the planets of our solar system using only css to create the planets.",
            role: "I created schemas for database, illustrated Earth, Jupiter, Saturn, Mercury, Venus using only CSS/Tailwind",
            liveUrl: "https://quack-planets.vercel.app/",
            technologies: "NextJS, tailwind, CSS"
        }
    })
    console.log("projects have been seeded!");

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })