import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){

    console.log("start seeding projects...");

    await prisma.project.create({
        data: {
            title: "Pocket PR",
            authors: "Keegan Anglim, Daniel Johnson",
            concept: "A content creator connects their social media accounts and gains ai generated insights about their communities, and valuble feedback on their content. The motivation of this app is to help content creators who cover difficult topics, better understand the discussions happening within their communities.",
            process: "I have worked on the user onboarding page, requesting, storing, and processing data for interactions with Openai using LangChain.",
            challenges: "Getting the proper scopes and realizing that we needed to reflect that information within our Clerk dashboard took some time to understand. Getting Prisma, Supabase, and Clerk to all play well together has also been a challenge. Finally, learning the best classes and methods in the LangChain library to help achieve our goals, has been a tremendous learning experience. Having gone through some of the challenges will certainly help me when faced with similar problems in the future. I remain very motivated, and enjoy working on this project everyday. We are currently pre-seed, and in the process of completing our MVP.",
            role: "CTO, Full Stack Developer",
            liveUrl: "https://foreveryone.ai/pocketpr",
            technologies: "NextJS, Clerk, Supabase, GoogleApis, OpenAi",
            thumbnail: "/thumbnails/pocketPRthumbnail-fs8.png",
            screenShot1: "/img1/pocketPR_videoId-fs8.png",
            screenShot2: "/img2/pocketPRDashboard-fs8.png",
            screenShot3: "/img3/pocketPRLandingPage-fs8.png",
            alt: "A helpful ai public relations assistant. The assistant looks smart, and empathetic. Dressed professionally."
        }
    });

    await prisma.project.create({
        data: {
            title: "Surpay",
            authors: "Keegan Anglim, Christine Dang, Alan Abed",
            concept: "A company funds and creates a survey, users take the survey and receive crypto! As someone who avoids people with clipboards and generally hates taking surveys, I thought, what if someone paid me in crypto in return for taking their survey!?",
            process: "I led this team, wrote tested and deployed the smart contract using Hardhat and Solidity. I created the database schemas to hold the survey data using MySQL and Sequelize. User authentication and authorization was done with Iron Session. I also used Moralis for interations between our web application and the smart contract.", 
            challenges: "This was the first time I had ever created a smart contract, and worked with a UI/UX Designer. It was also the first time that I had written a substantial amount of tests. Overall, I found the process to be very rewarding, and it kicked off a series of hackathons for me, which I still enjoy participating in.",
            role: "Smart Contract Developer, Full Stack Developer, Lead Developer",
            githubUrl: "https://github.com/guitarkeegan/surpay-backend",
            demoUrl: "https://www.youtube.com/watch?v=VRwA3HvGrww",
            liveUrl: "https://nameless-meadow-92309.herokuapp.com/",
            technologies: "Solidity, Hardhat, Chainlink, NextJS, Bootstrap",
            screenShot1: "/img1/surpayFrontMin.gif",
            screenShot2: "/img2/surpaySurvey-fs8.png",
            screenShot3: "/img3/surpayHomepage-fs8.png",
            thumbnail: "/thumbnails/SurpayLogoBlue-fs8.png",
            alt: "surpay logo"
        }
    });

    await prisma.project.create({
        data: {
            title: "Quack-Planets",
            authors: "Keegan Anglim",
            concept: "Hackathon project where each team was tasked with creating an educational site about the planets of our solar system using only css to create the planets.",
            process: "There were 3 developers on my team. I helped to set up the database schemas, and we each chose which parts of the site we wanted to style. I illustrated Earth, Jupiter, Saturn, Mercury, Venus using only CSS/Tailwind",
            challenges: "Creating the planets using only CSS was very challenging, but it forced me to be creative with my approach. It was also the first time I had worked with a team accross 3 timezones. It took us about a week, but we were able to meet the submission deadline and fullfill all of the requirements.",
            role: "Front End Developer",
            liveUrl: "https://quack-planets.vercel.app/",
            githubUrl: "https://github.com/guitarkeegan/quack-planets",
            technologies: "NextJS, tailwind, CSS",
            thumbnail: "/thumbnails/duckPlanets-fs8.png",
            screenShot1: "/img1/quackPlanetsMin.gif",
            screenShot2: "/img2/quackLanding-fs8.png",
            screenShot3: "/img3/earthQuack-fs8.png",
            alt: "A duck. Planets of the solar system. Space. Stars."
        }
    })

    await prisma.project.create({
        data: {
            title: "CryptoBets",
            authors: "Keegan Anglim, Christine Dang, Alan, Nathaniel", 
            concept: "Esport betting platform that uses a smart contract to handle the creation of betting pools and Chainlink Automation to trigger payout events.", 
            process: "I organized team meetings via discord. We had 4 team members including 2 Front End developers, a UI/UX Designer, and myself as the smart contract developer.",
            challenges: "Setting up the betting pool within the smart contract proved to be challenging. Also, it was very difficult for me to decide how we would be getting the game data, as well as what game data I was looking for, having never played League of Legends. The Riot Games API has a 24 hour limitation, which added another challenge with testing. The biggest thing I got out of doing this project was getting a sort of wurlwind overview of Chainlink Functions, which had just been released in beta. I didn't end up using the service for the project, but would like to revisit the documentation again for future projects. I was able to deploy the contract before the deadline, but we were not able to deploy the app (was not a requirement). My team members are interested in continuing work on this project, so I'm excited to have to opportunity to get more time with Solidity and Chainlink Functions.",
            demoUrl: "https://www.youtube.com/watch?v=uYGObN9cbOs",
            role: "Smart Contract Developer, Full Stack Developer, Lead Developer",
            technologies: "Solidity, Hardhat, Chainlink, NextJS, Tailwind",
            thumbnail: "/thumbnails/Esports_Betting_Stream_Logo_DM-fs8.png",
            screenShot1: "/img1/betDash.png",
            screenShot2: "/img2/betLogos.jpg",
            screenShot3: "/img3/betsPlaceBet.png",
            alt: "Company logo, symbol"
        }
    });
    await prisma.project.create({
        data: {
            title: "Discord Bot",
            authors: "Keegan Anglim, Rick Rieger, Auroiah",
            concept: "Hackathon project for the Dear Junior Dev Hackathon. Each group was tasked with creating a chatbot that would provide a social good for the discord community of developers. We built a bot that would aid the administrators in creating and managing hackathons. ",
            process: "I created several slash commands using Node, and the DiscordJS library. This was the same team that I worked with for the Quack-Planets project. We worked across 3 timezones, and managed to complete the project before the deadline. We deployed the server for the bot to Heroku.",
            challenges: "I had never created a bot of any kind before this project, so that was fun! I would say the biggest challenge was dealing with the DiscordJS documentation, which seemed to be somewhat fragmented, but in fairness, the folks maintaining the library were in the process of creating a newer version.",
            role: "Back end developer",
            technologies: "Node, DiscordJS, Heroku",
            thumbnail: "/thumbnails/discordBot-fs8.png",
            screenShot1: "/img1/discordBot1-fs8.png",
            screenShot2: "/img2/discordBot3-fs8.png",
            screenShot3: "/img3/discordBot2-fs8.png",
            alt: "A Discord bot. The bot has a job of helping users sign up for a hackathon. There should also be a hidden duck."

        }
    });
    await prisma.project.create({
        data: {
            title: "Steep Dreams",
            authors: "Keegan Anglim, Simmy Vargesse, David Kanas, James",
            concept: "An e-commerce site for selling tea. For the final project of my bootcamp, we decided to try our hand at creating an e-commerce site from scratch.",
            process: "Features user authentication and Stripe Api integration. Also automated emails with nodemailer, and registration with mailchimp for marketing purposes.",
            challenges: "For the final project of my Bootcamp, we were tasked with using the MERN stack to create our app. It was a lot of new information with using GraphQL and React for the first time. One of the biggest wins for me on the project was to create a working shopping cart feature, where users could add or delete items from a cart, then checkout with Stripe. This was also the first time I ran into the problem of 'prop drilling', or the act of passing props between multiple components. I have since found other solutions to this problem, but it was actually a big win for the groupt at the time.",
            liveUrl: "https://glacial-fortress-58935.herokuapp.com/",
            githubUrl: "https://github.com/guitarkeegan/steep-dreams",
            role: "Full Stack Developer",
            technologies: "Node, Express, Express-Apollo, GraphQL, React, Bootstrap",
            thumbnail: "/thumbnails/steepDreams-fs8.png",
            screenShot1: "/img1/steepDreamsHomepage-fs8.png",
            screenShot2: "/img2/steepDreamsCart-fs8.png",
            screenShot3: "/img3/steepDreamsAboutUs-fs8.png",
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