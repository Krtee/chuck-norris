# A Chuck Norris Website

## Description

This simple website displays a chuck norris joke using the https://api.chucknorris.io/ API.
In Addition it counts the number of visitors.
To view this website visit: https://chuck-norris-kq9lae42t-krtees-projects.vercel.app/

Tech Stack:

Next.JS
TailwindCSS
Prisma

## Run locally

To run this Project locally you need to create a .env file with a DATABASE_URL and a GLOBAL_ID
The DATABASE_URL should be the URL of your prisma database.

Then run:
`npm run prisma generate && prisma migrate dev`

Create an data object in your GLOBAL database.
The GLOBAL_ID should be the ID of a data object in your GLOBAL database, where your visitorCount is saved.

After that you can this command to start the development server:
`npm run dev`
