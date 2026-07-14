# Torq Events 🚀

A full-stack web platform for discovering and booking tech events — hackathons, meetups, and blockchain conferences.


## Features

- Browse featured tech events on the home page
- View detailed event information including overview, agenda, location, mode, audience and organizer
- Book your spot at an event with just your email address
- Similar events recommendation on each event page
- Admin can create events with image upload via Cloudinary
- Fully responsive design

---


### Dashboard


<img width="1890" height="913" alt="image" src="https://github.com/user-attachments/assets/5cf66cf1-4ff4-4788-8d2a-8f7d39c82fa3" />


### Featured Events


<img width="1889" height="908" alt="image" src="https://github.com/user-attachments/assets/fe8f2a1a-292d-4612-8990-b2560975d1b3" />

### Event Details


<img width="1888" height="862" alt="image" src="https://github.com/user-attachments/assets/13631189-a33f-4dfd-9b95-6937530d0013" />
<img width="1891" height="704" alt="image" src="https://github.com/user-attachments/assets/dc25e96a-be0b-4455-91ef-3041e618469c" />


### Similar Events


<img width="1889" height="910" alt="image" src="https://github.com/user-attachments/assets/b8a4ceb1-bd14-42c5-8a2c-06d72cc60a4e" />


---

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Database** — MongoDB Atlas with Mongoose
- **Image Upload** — Cloudinary
- **Styling** — Tailwind CSS
- **Deployment** — Railway

---

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account
- Cloudinary account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Torqued-codes/nextjs.git
cd nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
next-project/
├── app/
│   ├── api/
│   │   └── events/          # API routes for events
│   ├── events/
│   │   └── [slug]/          # Dynamic event details page
│   ├── layout.tsx
│   └── page.tsx             # Home page
├── components/
│   ├── BookEvent.tsx        # Booking form component
│   ├── EventDetails.tsx     # Event details component
│   ├── Eventcard.tsx        # Event card component
│   ├── ExploreBtn.tsx       # Explore button component
│   └── Navbar.tsx           # Navigation bar
├── database/
│   ├── booking.model.ts     # Booking mongoose model
│   ├── event.model.ts       # Event mongoose model
│   └── index.ts
├── lib/
│   ├── actions/
│   │   ├── booking.actions.ts   # Booking server actions
│   │   └── event.action.ts      # Event server actions
│   └── mongodb.ts               # MongoDB connection
└── public/
    └── icons/               # SVG icons
```

---

## API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/events` | Fetch all events |
| POST | `/api/events` | Create a new event |
| GET | `/api/events/:slug` | Fetch a single event by slug |

---

## Deployment

This project is deployed on **Railway**. To deploy your own instance:

1. Push your code to GitHub
2. Create a new project on [Railway](https://railway.app)
3. Connect your GitHub repository
4. Add all environment variables in the Variables tab
5. Generate a domain in Settings → Networking
6. Update `NEXT_PUBLIC_BASE_URL` with your Railway URL


## Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |
| `NEXT_PUBLIC_BASE_URL` | Base URL of your deployed app |
