

# Architecture Portfolio

> A stunning 3D interactive architecture portfolio showcasing modern architectural projects with immersive Three.js visualizations.



---

## ✨ Features

- **3D Interactive Visualization** - Explore architecture projects in an immersive 3D environment
- **Smooth Scroll Experience** - Navigate through projects with fluid scroll-based animations
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Project Showcase** - Display residential, commercial, and public architecture projects
- **Modern UI/UX** - Clean interface with smooth animations and transitions
- **TypeScript Support** - Fully typed for better development experience
- **Performance Optimized** - Adaptive rendering and efficient 3D performance

---

## 🏗️ Architecture Projects

The portfolio showcases diverse architectural projects including:

- **Residential**: Villas, lofts, eco-residences, and luxury penthouses
- **Commercial**: Corporate offices, tech campuses, and retail spaces  
- **Public**: Cultural centers, libraries, community hubs, and urban plazas
- **Hospitality**: Boutique hotels and mountain lodges
- **Specialized**: Healthcare facilities, educational spaces, and experimental designs

Each project features:
- High-quality architectural imagery
- Project details (location, year, type)
- Descriptive information about the design concept

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saidkocak/creative-portfolio-concept.git
   cd creative-portfolio-concept
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio


---

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14 with App Router
- **3D Graphics**: Three.js with React Three Fiber (R3F)
- **Animations**: Framer Motion & Framer Motion 3D
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Development**: ESLint for code quality

---

## 📁 Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── Interface.tsx     # Main UI overlay
│   ├── Scene.tsx         # 3D scene setup
│   ├── ProjectListItem.tsx # Individual project display
│   └── ...
├── context/          # React context providers
├── hooks/           # Custom React hooks
├── lib/             # Utilities and data
└── shaders/         # Custom shaders for 3D effects
```

---

## 🎨 Customization

### Adding New Projects

1. Add your project images to `public/img/arch-imgs/`
2. Update the `ARCHITECTURE_PROJECTS` array in `src/lib/types.ts`:

```typescript
{
  id: "024",
  name: "Your Project Name",
  type: "Project Type",
  location: "City, Country",
  year: "2024",
  image: "/img/arch-imgs/your-image.png",
  description: "Brief project description"
}
```

### Customizing the 3D Scene

- Camera settings: Edit `src/components/Scene.tsx`
- 3D positioning: Modify `ProjectListItem.tsx`
- Animations: Update Framer Motion configurations

---

## 📱 Responsive Design

The portfolio is fully responsive with optimized experiences for:
- **Desktop**: Full 3D interactions with mouse controls
- **Tablet**: Touch-friendly navigation with optimized zoom levels
- **Mobile**: Streamlined interface with adaptive performance

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Build for Production

```bash
npm run build
npm start
```

---

## 🤝 Contributing

This architecture portfolio concept is open for contributions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

Feel free to customize this template for your own architectural portfolio!

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using Next.js, Three.js, and modern web technologies**

✦ ✶ ✷
