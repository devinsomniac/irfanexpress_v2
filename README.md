# Irfan Express - AI-Powered Travel Planning

![Irfan Express Logo](/public/logo.png)
[**Live Demo: irfanexpress.fun**](https://irfanexpress.fun)

**Irfan Express** is a modern travel agency web application designed to create personalized travel itineraries using AI. Whether you're planning a spiritual pilgrimage like Hajj/Umrah or a leisure trip to vibrant destinations like Singapore, Malaysia, Thailand, or Nepal, Irfan Express leverages cutting-edge technology to craft detailed travel plans based on your preferences. Simply input your destination, group size, number of days, and budget (Low, Medium, or High), and let our AI-powered system, built with Gemini AI Flash 2.0, generate a tailored plan for you. With **NextAuth.js**, users can authenticate via Google OAuth, and their travel plans are securely stored in a **PostgreSQL** database for easy access.

This project is built with **Next.js**, styled with **Tailwind CSS**, and deployed on **Vercel**. It uses **Drizzle ORM** with **PostgreSQL** (via **Neon Tech**) for data management, integrates the **Gemini AI API** for itinerary generation, and sources high-quality images from **Pexels**.

---

## Features

- **AI-Powered Travel Plans**: Generate detailed itineraries using Gemini AI Flash 2.0 based on:
  - **Destination**: Where you want to go.
  - **Group Size**: Number of travelers.
  - **Number of Days**: Duration of your trip.
  - **Budget**: Choose from Low, Medium, or High.
- **User Authentication**: Secure login with Google OAuth using NextAuth.js.
- **Plan Storage**: Save your generated travel plans in a PostgreSQL database, linked to your authenticated user account.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS, ensuring a seamless experience on mobile, tablet, and desktop.
- **Database Integration**: Store and manage travel plans using PostgreSQL with Drizzle ORM and Neon Tech.
- **Rich Visuals**: High-quality destination images sourced from Pexels.
- **Easy Deployment**: Hosted on Vercel for fast, reliable access.
- **User-Friendly Interface**: Intuitive forms and visually appealing layouts for a hassle-free planning experience.

---

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid and responsive design.
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) - OAuth authentication with Google provider.
- **Database**: [PostgreSQL](https://www.postgresql.org/) - Open-source relational database for storing user plans.
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/) - Lightweight TypeScript ORM for PostgreSQL.
- **Database Hosting**: [Neon Tech](https://neon.tech/) - Serverless PostgreSQL platform.
- **AI Integration**: [Gemini AI Flash 2.0 API](https://gemini.ai/) - AI-powered itinerary generation.
- **Image Source**: [Pexels API](https://www.pexels.com/api/) - Free stock photos for travel destinations.
- **Deployment**: [Vercel](https://vercel.com/) - Platform for frontend deployment and scaling.

---

---

## Getting Started

### Prerequisites

- **Node.js**: Version 18.x or higher.
- **npm** or **yarn**: Package manager for installing dependencies.
- **PostgreSQL**: Local or Neon Tech-hosted database.
- **API Keys**:
  - Gemini AI Flash 2.0 API key.
  - Google OAuth credentials (Client ID and Client Secret) for NextAuth.js.
- **Vercel Account**: For deployment.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/devinsomniac/irfanexpress_v2.git
   cd irfanexpress_v2
   ```
2. **Install Dependencies**:
   ```bash
   npm install
    or
    yarn install
   ```
3. **Set Up Environment Variables: Create a .env file in the root directory and add the following**:
   ```bash
    DATABASE_URL=postgresql://username:password@hostname:port/database_name
    GEMINI_AI_API_KEY=your_gemini_ai_api_key
    NEXT_PUBLIC_BASE_URL=http://localhost:3000
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your_random_secret_string
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```
4. **Set Up the Database:**:
   ```bash
   npx drizzle-kit push:pg
   ```
5. **Run the Development Server:**:
   ```bash
   npm run dev 
   or
    yarn dev
   ```      

### Usage
- Sign In: Use the "Sign In with Google" option to authenticate via Google OAuth.
- Home Page: Enter your travel preferences (destination, group size, days, budget) in the search form.
- AI Generation: Submit the form to generate a custom travel plan powered by Gemini AI Flash 2.0.
- Save Plan: Your generated plan is automatically saved to the database under your user account.
- View Plans: Access your saved travel plans anytime after signing in.
- Contact Us: Reach out for booking or further assistance via the Contact page. 

---

### Key Additions
1. **NextAuth.js**:
   - Added to the "Features" section: "User Authentication: Secure login with Google OAuth using NextAuth.js."
   - Added to the "Tech Stack": "Authentication: NextAuth.js - OAuth authentication with Google provider."
   - Updated "Prerequisites" and "Installation" with Google OAuth setup instructions (Client ID, Client Secret, and `NEXTAUTH_*` variables).

2. **Database for Plans**:
   - Added to "Features": "Plan Storage: Save your generated travel plans in a PostgreSQL database, linked to your authenticated user account."
   - Updated "Usage" to include saving and viewing plans tied to user authentication.

3. **Environment Variables**:
   - Added `NEXTAUTH_URL`, `NEXTAUTH_SECRET`, `GOOGLE_CLIENT_ID`, and `GOOGLE_CLIENT_SECRET` to the `.env` setup.

---

### Here are some screenshots showcasing key pages of Irfan Express:


**Home Page**

1. ![Home 1](/public/screenshots/Home.png)
2. ![Home 2](/public/screenshots/Home2.png)
3. ![Home 3](/public/screenshots/Home3.png)
4. ![Home 4](/public/screenshots/Home4.png)

**Profile Page**

1. ![Profile 1](/public/screenshots/Profile1.png)
2. ![Profile 2](/public/screenshots/Profile2.png)


**Plan Page**

1. ![Plan 1](/public/screenshots/Plan1.png)
2. ![Plan 2](/public/screenshots/Plan2.png)
3. ![Plan 3](/public/screenshots/Plan3.png)

### Acknowledgments
- Gemini AI: For powering the intelligent itinerary generation.
- Pexels: For providing stunning travel imagery.
- Neon Tech: For seamless PostgreSQL hosting.
- NextAuth.js: For secure and easy authentication.
- Vercel: For an amazing deployment platform.