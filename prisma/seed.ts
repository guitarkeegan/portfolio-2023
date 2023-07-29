import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){

    console.log("start seeding projects...");

    await prisma.project.create({
        data: {
            title: "Pocket PR",
            authors: "Keegan Anglim, Daniel Johnson",
            description: "Content creators connect their social media accounts, and gain ai generated insights about their communities, and valuble feedback on their content. I am responsible for designing and implementing many of the features, including api integrations, database management, user data flows, and prompt engineering.",
            role: "CTO, Full Stack Developer",
            liveUrl: "https://foreveryone.ai/pocketpr",
            technologies: "NextJS, Clerk, Supabase, GoogleApis, OpenAi",
            thumbnail: "/pocketPRthumbnail.png",
            alt: "A helpful ai public relations assistant. The assistant looks smart, and empathetic. Dressed professionally. The assistant can be a man or a woman, but should be a blend of ethnicities. The background should be a medium to dark shade."

        }
    });

    await prisma.project.create({
        data: {
            title: "Surpay",
            authors: "Keegan Anglim, Christine Dang, Alan Abed",
            description: "Company funds and creates a survey, Users take the survey and receive crypto! I lead this team, wrote tested and deployed the smart contract using Hardhat and Solidity. I created the database schemas to hold the survey data using MySQL. User authentication and authorization was done with Iron Session. I also used Moralis for interations between our web application and the smart contract.",
            liveUrl: "",
            role: "Smart Contract Developer, Full Stack Developer, Lead Developer",
            technologies: "Solidity, Hardhat, Chainlink, NextJS, Bootstrap",
            thumbnail: "/SurpayLogoBlue.png",
            alt: "surpay logo"
        }
    });

    await prisma.project.create({
        data: {
            title: "Quack-Planets",
            authors: "Keegan Anglim",
            description: "Hackathon project were each team was tasked with creating an educational site about the planets of our solar system using only css to create the planets.",
            role: "I created schemas for database, illustrated Earth, Jupiter, Saturn, Mercury, Venus using only CSS/Tailwind", liveUrl: "https://quack-planets.vercel.app/",
            technologies: "NextJS, tailwind, CSS",
            thumbnail: "/duckPlanets.png",
            alt: "A duck. Planets of the solar system. Space. Stars."
        }
    })

    await prisma.project.create({
        data: {
            title: "CryptoBets",
            authors: "Keegan Anglim, Christine Dang, Alan, Nathan",
            description: "Esport betting platform that uses a smart contract to handle the creation of betting pools and Chainlink Automation to trigger payout events. Wrote tested and deployed smart contract using Hardhat and Solidity.",
            liveUrl: "",
            role: "Smart Contract Developer, Full Stack Developer, Lead Developer",
            technologies: "Solidity, Hardhat, Chainlink, NextJS, Tailwind",
            thumbnail: "/Esports_Betting_Stream_Logo_DM.png",
            alt: "Company logo, symbol"
        }
    });
    await prisma.project.create({
        data: {
            title: "Discord Bot",
            authors: "Keegan Anglim, Rick Rieger, Auroiah",
            description: "Hackathon project for the Dear Junior Dev Hackathon. Each group was tasked with creating a chatbot that would provide a social good for the discord community of developers. We built a bot that would aid the administrators in creating and managing hackathons. I created several slash commands using Node, and the DiscordJS library.",
            liveUrl: "",
            role: "Back end developer",
            technologies: "Node, DiscordJS, Heroku",
            thumbnail: "/discordBot.png",
            alt: "A Discord bot. The bot has a job of helping users sign up for a hackathon. There should also be a hidden duck."

        }
    });
    await prisma.project.create({
        data: {
            title: "Steep Dreams",
            authors: "Keegan Anglim, Simmy Vargesse, David Kanas, James",
            description: "An e-commerce site for selling tea. Features user authentication and mock Stripe Api integration. Also automated emails with nodemailer, and registration with mailchimp for marketing purposes",
            liveUrl: "",
            role: "Back end developer",
            technologies: "Node, DiscordJS, Heroku",
            thumbnail: "/steepDreams.png",
            alt: "Dreaming of tea and green fields."

        }
    });
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