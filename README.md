# EduBh - Industry-Ready Education Platform

A modern and responsive educational platform landing page built with **Next.js**, **React**, and **Tailwind CSS**. EduBh bridges the gap between academia and industry with comprehensive programs designed for modern career success.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Pages & Sections](#pages--sections)
4. [Technologies Used](#technologies-used)
5. [Getting Started](#getting-started)
6. [Project Structure](#project-structure)

---

## Introduction

**EduBh** is an innovative educational platform that offers UGC-approved degrees combined with industry training courses. The platform partners with prestigious universities like Amity Online, Manipal Online, IIT Patna, and BITS Pilani to provide integrated education programs.

This project showcases a modern, animated landing page with seamless user experience, interactive components, and a focus on converting visitors into applicants.

---

## Features

### 🎨 **Visual Design**
- **Modern UI/UX**: Clean, professional design with glassmorphism effects
- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Animated Components**: Smooth animations powered by Framer Motion
- **Interactive Elements**: Floating dock navigation, scroll-triggered animations

### 🚀 **Functionality**
- **Application Form**: Dedicated page for program applications (`/apply`)
- **Contact System**: Contact form for general inquiries
- **University Partnerships**: Showcase of partner universities with logo ticker
- **Testimonials**: Student testimonials with avatar cards
- **Pricing Section**: Program pricing and features
- **Floating Navigation**: Interactive dock for quick navigation

### 📱 **User Experience**
- **Smooth Scrolling**: Anchor links with smooth scroll behavior
- **Loading Animations**: Page transitions and component animations
- **Form Validation**: Client-side form validation
- **Mobile-First**: Optimized for mobile devices

---

## Pages & Sections

### **Main Landing Page (`/`)**
- **Hero Section**: Main value proposition with animated elements
- **Product Showcase**: Program highlights and features
- **University Partners**: Logo ticker with partner universities
- **Testimonials**: Student success stories
- **Pricing**: Program costs and features
- **Call to Action**: Conversion-focused section

### **Application Page (`/apply`)**
- **Application Form**: Complete form for program applications
- **CogCylinder Animation**: Interactive background animation
- **Floating Info Cards**: Key benefits and features
- **Form Validation**: Real-time validation and error handling

### **Contact Page (`/contact`)**
- **Contact Form**: General inquiry form
- **Contact Details**: Company information and contact methods
- **FAQ Section**: Frequently asked questions
- **Contact Hero**: Hero section with contact information

---

## Technologies Used

### **Frontend Framework**
- **Next.js (v14.2.4)**: React-based framework for server-side rendering
- **React (v18)**: Component-based JavaScript library
- **TypeScript (v5)**: Typed JavaScript for better development experience

### **Styling & Animation**
- **Tailwind CSS (v3.4.1)**: Utility-first CSS framework
- **Framer Motion (v11.2.14)**: Animation library for React
- **PostCSS**: CSS processing and optimization

### **UI Components**
- **Custom Components**: Modular, reusable React components
- **Responsive Design**: Mobile-first responsive layout
- **Interactive Elements**: Floating dock, scroll animations, hover effects

### **Development Tools**
- **ESLint**: Code linting and quality assurance
- **Prettier**: Code formatting
- **TypeScript**: Static type checking

---

## Getting Started

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/edubh-landing-page.git
   cd edubh-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### **Build for Production**
```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── apply/             # Application form page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components
│   │   ├── floating-dock.tsx
│   │   ├── resizable-navbar.tsx
│   │   └── ...
│   └── ...
├── sections/             # Page sections
│   ├── CallToAction.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── LogoTicker.tsx
│   ├── Pricing.tsx
│   └── ...
├── assets/               # Static assets
│   ├── images/
│   └── icons/
└── lib/                  # Utility functions
    └── utils.ts
```

---

## Key Features

### **Educational Focus**
- UGC-approved degree programs
- Industry training integration
- University partnerships
- Scholarship opportunities

### **Technical Excellence**
- Modern React patterns
- TypeScript for type safety
- Optimized performance
- SEO-friendly structure

### **User Experience**
- Intuitive navigation
- Fast loading times
- Mobile optimization
- Accessibility considerations

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

For questions or support, please contact:
- Email: info@edubh.com
- Website: [EduBh Platform](https://edubh.vercel.app)

---

**Built with ❤️ by Aweniket**
