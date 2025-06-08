![Thumbnail](public/img/thumbnail.png)

# Creative Portfolio Concept

> A modern 3D interactive portfolio concept built with Next.js, Three.js, and Framer Motion.

![NextJS](https://img.shields.io/badge/Next-101010?style=flat&logoSize=small&logo=nextdotjs&logoColor=FFFFFF) ![FramerMotion](https://img.shields.io/badge/FramerMotion-101010?style=flat&logoSize=small&logo=framer&logoColor=FFFFFF) ![R3F](https://img.shields.io/badge/R3F-101010?style=flat&logoSize=small&logo=threedotjs&logoColor=FFFFFF) ![MongoDB](https://img.shields.io/badge/MongoDB-101010?style=flat&logoSize=small&logo=mongodb&logoColor=FFFFFF)

---

## Creative Portfolio Concept

This is a creative portfolio concept showcasing modern web technologies including 3D animations, interactive elements, and responsive design. Originally built as a Spotify album visualizer, this concept demonstrates how to create engaging user experiences with Three.js and React.

## Features

- 3D interactive visualizations using React Three Fiber
- Smooth animations with Framer Motion
- Modern responsive design with Tailwind CSS
- TypeScript for type safety
- MongoDB integration for data persistence

---

## How to run locally

### 0 ‣ Pre-requisites

- [Node.js](https://nodejs.org/en/download/)
- Clone this repository

---

### 1 ‣ Set up environment variables (Optional)

Create a `.env` file in the root of the project if you want to use the Spotify integration:

```bash
# Spotify API (Optional)
SPOTIFY_CLIENT_ID="YOUR_SPOTIFY_CLIENT_ID"
SPOTIFY_CLIENT_SECRET="YOUR_SPOTIFY_CLIENT_SECRET"

# App URLs
REDIRECT_URI="http://localhost:3000/api/callback"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

---

### 2 ‣ Run the project

This app was built with Next.js, so you can run it with the following commands:

```bash
# Install dependencies
npm install

# Run the project
npm run dev
```

- The project should now be running on `http://localhost:3000`

![Screenshot](public/img/screenshot.png)

---

### Bonus ‣ MongoDB

To store user data and create share links, you can use a MongoDB database. Add the following variables to your `.env` file:

```bash
# MongoDB
MONGODB_URI="YOUR_MONGODB_URI"
```

---

## Contributing

Feel free to fork this project and make it your own! This is meant to be a creative starting point for portfolio websites.

✦ ✶ ✷
