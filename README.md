# Madhras Dosa - Restaurant Website

A modern, responsive website for Madhras Dosa, an authentic South Indian restaurant in Glasgow. Built with Next.js 16, React 18, Tailwind CSS 4, and Framer Motion.

## 🎯 Project Overview

Madhras Dosa is a full-featured restaurant website showcasing authentic South Indian cuisine with a focus on dosas, idlis, and traditional curries. The site features smooth animations, responsive design, and an emphasis on transparency and quality.

## ✨ Features

- **Responsive Navbar**: Fixed navigation with mobile hamburger menu, active page highlighting, and smooth scroll effects
- **Hero Section**: Full-screen background with animated text and CTA buttons, featuring restaurant stats
- **About Us Page**: Complete brand story, vision & mission, "Why Choose Us" section, and team introduction
- **Menu Page**: Static menu display with CTA buttons for online ordering
- **Gallery Page**: Image grid with hover effects and Instagram feed placeholder
- **Blog Page**: Featured posts with categories, dates, read times, and engaging layouts
- **Order Online Page**: Uber Eats integration with benefits section and step-by-step ordering guide
- **Signature Dishes**: Showcasing 6 signature dishes with images and descriptions
- **Customer Testimonials**: 5 reviews with star ratings and smooth animations
- **FAQ Section**: Accordion-style FAQs using Radix UI
- **Final CTA**: Conversion-focused call-to-action sections

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.7 (App Router)
- **React**: 18+
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12.23.25
- **UI Components**: Radix UI (@radix-ui/react-accordion)
- **Icons**: Lucide React 0.556.0
- **Package Manager**: pnpm 10.24.0
- **Fonts**: Google Fonts (Baloo 2, Bebas Neue, Poppins, Inter, Playfair Display)

## 🎨 Design System

### Colors
- **Primary**: `#febd01` (Golden Yellow)
- **Secondary**: `#FF4500` (Orange)
- **Dark**: `#1A1A1A` (Near Black)
- **Background**: `#FFF8E7` (Cream/Beige)
- **Text**: `#2D2D2D` (Dark Gray)

### Typography
- **Headings**: Baloo 2 (Primary brand font)
- **Body**: Poppins
- **Display**: Bebas Neue, Playfair Display
- **UI**: Inter

## 📁 Project Structure

```
dosa-project/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.jsx          # About Us page
│   │   ├── blog/
│   │   │   └── page.jsx          # Blog/Journal page
│   │   ├── gallery/
│   │   │   └── page.jsx          # Gallery page
│   │   ├── menu/
│   │   │   └── page.jsx          # Menu page
│   │   ├── order/
│   │   │   └── page.jsx          # Order Online page
│   │   ├── globals.css           # Global styles & Tailwind config
│   │   ├── layout.js             # Root layout with fonts & navbar
│   │   └── page.js               # Homepage
│   └── components/
│       ├── Navbar.jsx            # Main navigation component
│       ├── HeroSection.jsx       # Hero section with stats
│       ├── Dishes.jsx            # Signature dishes showcase
│       ├── Testimonials.jsx      # Customer reviews
│       ├── FAQ.jsx               # FAQ accordion
│       ├── CTA.jsx               # Call-to-action section
│       └── ui/
│           └── accordion.jsx     # Reusable accordion component
├── public/
│   ├── dosa.jpg                  # Hero background image
│   ├── MD Logomark.png           # Restaurant logo
│   ├── GR-Dosa.webp              # Ghee Roast Dosa image
│   ├── CC.jpg                    # Chettinad Curry image
│   ├── m-dosa.jpg                # Masala Dosa image
│   ├── idli.jpg                  # Idli Sambar image
│   ├── P-Dosa.png                # Paneer Dosa image
│   └── uttapam.png               # Uttapam image
├── package.json
├── pnpm-lock.yaml
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.mjs
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm 10+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dosa-project
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
```

### Start Production Server

```bash
pnpm start
```

## 📄 Page Routes

- `/` - Homepage (Hero, Dishes, Testimonials, FAQ, CTA)
- `/about` - About Us (Story, Vision, Mission, Why Choose Us, Team)
- `/menu` - Menu (Static menu display)
- `/gallery` - Gallery (Image grid, Instagram feed)
- `/blog` - Blog/Journal (Featured posts)
- `/order` - Order Online (Uber Eats integration)

## 🎯 Section IDs for Navigation

Each page includes section IDs for smooth scrolling:

### Homepage (`/`)
- `#hero` - Hero section
- `#dishes` - Signature dishes
- `#testimonials` - Customer reviews
- `#faq` - FAQ section

### About Page (`/about`)
- `#hero` - Hero section
- `#story` - Our Story
- `#vision-mission` - Vision & Mission
- `#why-choose-us` - Why Choose Us
- `#team` - Meet Our Team

### Blog Page (`/blog`)
- `#hero` - Hero section
- `#featured-posts` - Featured Posts

### Gallery Page (`/gallery`)
- `#hero` - Hero section
- `#gallery-grid` - Gallery Grid
- `#instagram` - Instagram Feed

### Menu Page (`/menu`)
- `#hero` - Hero section
- `#menu` - Static Menu

### Order Page (`/order`)
- `#hero` - Hero section
- `#benefits` - Benefits
- `#how-it-works` - How It Works

## 🎨 Key Components

### Navbar
- Fixed position with scroll effects
- Mobile-responsive hamburger menu
- Active page highlighting
- Smooth animations

### Hero Section
- Full-screen background with overlay
- Animated headline and subtext
- Two CTA buttons (Order Online, Book Catering)
- Stats boxes (Rating, Followers, Menu Items, Happy Guests)

### Dishes Component
- 6 signature dish cards
- Next.js Image optimization
- Hover animations
- Golden badges

### Testimonials
- 5 customer reviews
- Avatar circles with initials
- 5-star ratings with stagger animation
- Golden accent lines

### FAQ Component
- Radix UI accordion
- 5 questions with collapsible answers
- Smooth expand/collapse animations

### CTA Section
- Conversion-focused messaging
- Multiple CTA buttons
- Trust indicators

## 🎭 Animations

All animations are powered by Framer Motion with:
- Fade-in effects
- Stagger animations for lists
- Hover scale effects
- Smooth page transitions
- Mobile-optimized performance

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Optimized for all screen sizes
- Touch-friendly mobile navigation

## 🔧 Configuration

### Tailwind Config
Custom theme extensions in `globals.css`:
- Custom color palette
- Font family variables
- Accordion animations

### Next.js Config
- Image optimization enabled
- React strict mode
- Modern build output

## 📝 Content Management

Restaurant information is currently hardcoded in components. To update:

1. **Menu Items**: Edit `src/components/Dishes.jsx`
2. **Testimonials**: Edit `src/components/Testimonials.jsx`
3. **FAQ Questions**: Edit `src/components/FAQ.jsx`
4. **Blog Posts**: Edit `src/app/blog/page.jsx`
5. **About Content**: Edit `src/app/about/page.jsx`

## 🌟 Future Enhancements

- [ ] Connect to CMS (Sanity, Contentful, or Strapi)
- [ ] Add actual Uber Eats integration
- [ ] Implement real Instagram feed API
- [ ] Add contact form with email integration
- [ ] Add table reservation system
- [ ] Multi-language support (English, Tamil, Hindi)
- [ ] Dark mode toggle
- [ ] Blog post detail pages
- [ ] Search functionality
- [ ] Customer account system

## 📄 License

This project is proprietary and confidential. All rights reserved by Madhras Dosa.

## 👥 Credits

- **Restaurant**: Madhras Dosa, Glasgow
- **Founders**: Satheesh (Chef) & X (Operations)
- **Established**: Late 2021
- **Website Development**: 2025

## 📞 Contact

For inquiries about the restaurant or website:
- **Location**: Glasgow, Scotland
- **Cuisine**: South Indian (Dosas, Idlis, Curries)
- **Specialties**: Open kitchen, Fermented batters, No MSG/artificial colors

---

**Built with ❤️ for authentic South Indian food lovers**
