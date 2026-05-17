<div align="center">

<img src="https://wanderlust-project-tau.vercel.app/_next/image?url=%2Fassets%2FWanderlast.png&w=256&q=75" alt="Wanderlust Logo" width="180" />

# 🌍 Wanderlust

### _Your gateway to extraordinary travel experiences around the world_

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-wanderlust--project--tau.vercel.app-1d9e75?style=for-the-badge)](https://wanderlust-project-tau.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/shahadat-hossain99/project-wonderlust)

<br />

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![HeroUI](https://img.shields.io/badge/HeroUI-3.0.4-000000?style=flat-square)](https://heroui.com/)
[![Better Auth](https://img.shields.io/badge/Better_Auth-1.6.11-6366F1?style=flat-square)](https://better-auth.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.2.0-47A248?style=flat-square&logo=mongodb)](https://mongodb.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com/)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<br/>

_A modern, full-stack travel booking platform — discover destinations, manage bookings, and plan your next adventure._

[🌐 Live Demo](https://wanderlust-project-tau.vercel.app/) · [📁 GitHub Repo](https://github.com/shahadat-hossain99/project-wonderlust) · [🐛 Report Bug](https://github.com/shahadat-hossain99/project-wonderlust/issues) · [✨ Request Feature](https://github.com/shahadat-hossain99/project-wonderlust/issues)

</div>

---

## 📸 Preview

<div align="center">

|        Homepage         |      Destinations      |    My Bookings    |
| :---------------------: | :--------------------: | :---------------: |
| Hero banner with search | Browse travel packages | Manage your trips |

> 🔗 Visit the [live site](https://wanderlust-project-tau.vercel.app/) to explore all pages.

</div>

---

## ✨ Features

### 🏠 Homepage

- **Full-screen Hero Banner** with stunning background imagery and CTA buttons
- **Smart Search Interface** — filter by Location, Date/Duration, Budget ($0–$3000), and Number of People
- **Featured Destinations** — handpicked travel packages with pricing and duration
- **Why Choose Us** section — Safe & Secure, Expert Guides, 24/7 Support
- **Traveler Testimonials** — real reviews from happy customers
- **Journey CTA** — motivational section driving conversions

### 🗺️ Destinations

- **Browse All Destinations** — full listing with images, pricing, duration, country tags
- **Individual Destination Pages** — dynamic routing with detailed info, highlights, and booking
- **Rich Destination Cards** — Cox's Bazar ($350), Kuakata ($200), Maldives ($2500), Sajek Valley ($250), Bandarban ($300), Sylhet ($280), and more

### 📅 My Bookings

- **Booking History** — view all trips with departure date, price, and booking ID
- **Responsive Booking Cards** — image, destination name, formatted date, truncated ID
- **Empty State** — elegant UI when no bookings exist
- **View Details** — quick access to booking specifics

### 👤 Authentication & Profile

- **Sign Up / Login** — email + password with Google OAuth
- **Protected Routes** — session-based access control via Better Auth
- **User Profile Page** — avatar, member since date, travel statistics (Total Bookings, Countries Visited, Upcoming Trips, Total Spent)
- **Edit Profile** — update personal information

### ➕ Add Destination _(Admin)_

- **Rich Form** — name, description, location, image URL, price, rating, duration, highlights
- **Category Selection** — Beach, Mountain, City, Adventure, Cultural, Luxury
- **Dynamic Highlights** — add/remove highlight bullet points
- **REST API Integration** — posts directly to backend server

### 🎨 UI / UX

- **Animated Loading Page** — SVG compass ring with progress counter and phrase carousel
- **Custom 404 Page** — branded not-found screen with navigation options
- **Responsive Navbar** — mobile hamburger menu with smooth transitions
- **Footer** — newsletter signup, quick links, support links, contact info, social icons
- **Toast Notifications** — success/error feedback via React Toastify

---

## 🛠️ Tech Stack

### Frontend

| Technology         | Version | Purpose                                |
| ------------------ | ------- | -------------------------------------- |
| **Next.js**        | 16.2.6  | React framework with App Router & SSR  |
| **React**          | 19.2.4  | UI component library                   |
| **Tailwind CSS**   | v4      | Utility-first styling                  |
| **HeroUI**         | 3.0.4   | Pre-built accessible UI components     |
| **React Icons**    | 5.6.0   | Icon library (Lucide, Material Design) |
| **React Toastify** | 11.1.0  | Toast notifications                    |

### Backend & Auth

| Technology                     | Version | Purpose                                  |
| ------------------------------ | ------- | ---------------------------------------- |
| **Better Auth**                | 1.6.11  | Authentication (email + Google OAuth)    |
| **MongoDB**                    | 7.2.0   | Database (via Better Auth Mongo Adapter) |
| **@better-auth/mongo-adapter** | 1.6.11  | MongoDB adapter for Better Auth          |
| **JWT**                        | —       | Token-based API request authorization    |

### Dev Tools

| Technology   | Purpose                         |
| ------------ | ------------------------------- |
| **ESLint 9** | Code linting with Next.js rules |
| **PostCSS**  | CSS processing pipeline         |
| **Vercel**   | Deployment & hosting            |

---

## 📁 Project Structure

```
wanderlust-project/
├── public/
│   └── assets/                     # Static assets
│       ├── Wanderlast.png           # Brand logo
│       ├── CTA.png                  # Call-to-action image
│       ├── person1.png              # Testimonial avatar
│       └── person2.png              # Testimonial avatar
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── add-destination/
│   │   │   └── page.jsx             # Add destination form (admin)
│   │   ├── api/                     # API route handlers
│   │   ├── destinations/
│   │   │   ├── page.jsx             # All destinations listing
│   │   │   └── [id]/
│   │   │       └── page.jsx         # Individual destination detail
│   │   ├── login/
│   │   │   └── page.jsx             # Login page
│   │   ├── my-bookings/
│   │   │   └── page.jsx             # User's booking history
│   │   ├── profile/
│   │   │   └── page.jsx             # User profile & travel stats
│   │   ├── signup/
│   │   │   └── page.jsx             # Registration page
│   │   ├── globals.css              # Global styles
│   │   ├── layout.js                # Root layout with Navbar & Footer
│   │   ├── loading.jsx              # Animated loading screen
│   │   ├── not-found.jsx            # Custom 404 page
│   │   └── page.js                  # Homepage
│   │
│   ├── components/                  # Reusable components
│   │   ├── Home/                    # Homepage sections
│   │   ├── Pages/                   # Page-level components
│   │   ├── Shared/                  # Shared utilities
│   │   ├── Footer/                  # Footer component
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx           # Responsive navigation
│   │   └── Ui/                      # UI-specific components
│   │       ├── BookingCard.jsx       # Booking list card
│   │       ├── BookingDetails.jsx    # Booking detail view
│   │       ├── Bookings.jsx          # Bookings container
│   │       ├── DeleteButton.jsx      # Delete action button
│   │       ├── DestinationsCard.jsx  # Destination listing card
│   │       ├── EditModal.jsx         # Profile edit modal
│   │       └── NoBookings.jsx        # Empty bookings state
│   │
│   └── lib/                         # Utility & config files
│       ├── auth-client.js            # Better Auth client setup
│       ├── auth.js                   # Auth configuration
│       └── proxy.js                  # API proxy helpers
│
├── .env                             # Environment variables
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs                  # Next.js configuration
├── package.json
├── postcss.config.mjs
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn**
- **MongoDB** instance (local or Atlas)
- **Backend server** running (for booking/destination APIs)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/shahadat-hossain99/project-wonderlust.git
cd project-wonderlust
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up environment variables**

Create a `.env` file in the root:

```env
# Server
NEXT_PUBLIC_SERVER_URL=http://localhost:5004

# Better Auth
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000

# MongoDB
MONGODB_URI=your_mongodb_connection_string

BETTER_AUTH_SECRET=your_secret_here   # also used for JWT signing

# Google OAuth
CLIENT_ID=your_google_client_id
CLIENT_SECRET=your_google_client_secret
```

**4. Run the development server**

```bash
npm run dev
```

**5. Open in your browser**

```
http://localhost:3000
```

---

## 📦 Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🌐 Live Destinations

The platform currently features these travel packages:

| Destination     | Country    | Price        | Duration          |
| --------------- | ---------- | ------------ | ----------------- |
| 🏖️ Cox's Bazar  | Bangladesh | $350/person  | 5 days / 4 nights |
| 🌊 Kuakata      | Bangladesh | $200/person  | 7 days / 6 nights |
| 🏔️ Sajek Valley | Bangladesh | $250/person  | 3 days / 2 nights |
| 🌿 Bandarban    | Bangladesh | $300/person  | 4 days / 3 nights |
| 🍵 Sylhet       | Bangladesh | $280/person  | 4 days / 3 nights |
| 🏝️ Maldives     | Maldives   | $2500/person | 6 days / 5 nights |

---

## 🔐 Authentication

Wanderlust uses **Better Auth** with MongoDB for secure, production-ready authentication:

- Email & Password signup/login
- Google OAuth integration
- Session-based protected routes
- **JWT token-based API authorization**
- Token-based API authorization
- Server-side session retrieval via `auth.api.getSession()`
- Bearer token passed in `Authorization` header for protected API calls

---

## 📱 Responsive Design

Fully optimized across all screen sizes:

| Breakpoint     | Width   | Layout                       |
| -------------- | ------- | ---------------------------- |
| Mobile         | 320px+  | Single column, stacked cards |
| Tablet (`sm`)  | 640px+  | Side-by-side booking cards   |
| Desktop (`lg`) | 1024px+ | Full multi-column layout     |
| Large (`xl`)   | 1280px+ | Max-width constrained grid   |

---

## 🔮 Roadmap

- [x] User authentication (email + Google)
- [x] Destination browsing & detail pages
- [x] Booking system with history
- [x] User profile with travel statistics
- [x] Responsive design for all devices
- [x] Custom loading & 404 pages
- [ ] Payment gateway integration
- [ ] Advanced search filters (category, rating, budget range)
- [ ] Wishlist / save destinations
- [ ] Review & rating system
- [ ] Admin dashboard
- [ ] Multi-language support
- [ ] Email notifications for bookings

---

## 👨‍💻 Author

**Md. Shahadat Hossain**

[![GitHub](https://img.shields.io/badge/GitHub-shahadat--hossain99-181717?style=flat-square&logo=github)](https://github.com/shahadat-hossain99)

---

## 📄 License

This project is private and proprietary. All rights reserved © 2026 Wanderlust.

---

<div align="center">

**⭐ If you found this project helpful, give it a star on GitHub!**

[🔝 Back to Top](#-wanderlust)

</div>
