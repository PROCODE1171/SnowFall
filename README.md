# ❄ SNOWFALL — Free Modern Minecraft Resource Hub

SNOWFALL is a free, modern Minecraft resource platform where players can discover useful Minecraft resources, performance optimization tools, mods, resource packs, launchers, macros/automation utilities, and informational client tools.

![Aesthetic](https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80)

---

## 🎨 Features & Design

- **Cyber-Ice Theme**: Dark navy / black obsidian palette with neon cyan accents, glowing borders, and crisp typography.
- **Glassmorphism**: Frosted glass cards with backdrop blur and responsive grid layouts.
- **Canvas Snowfall Engine**: Lightweight, hardware-accelerated snow and crystal shimmer particle simulation with an on/off toggle button.
- **Single Page Application (SPA)**: Instant hash routing (`#home`, `#mods`, `#resource-packs`, `#launchers`, `#macros`, `#hack-clients`, `#rules`) with browser back/forward history support.
- **Instant Search & Filter**: Real-time search across names, descriptions, tags, authors, platforms, and loaders with category pills and sorting options.
- **Resource Details Modal**: Full preview modal with technical specifications, author credits, and direct links.
- **Safe & Legitimate**: Purely informational Hack Clients section with prominent safety warnings and strictly official download sources.
- **Mobile Responsive**: Custom layout shifting from 3-4 cards on desktop to 2 on tablet and 1 on mobile.
- **Discord Integration**: Real community buttons linking to `https://discord.gg/qdCp4sgwKD`.

---

## 🚀 Quick Start

### Option 1: Double-click `start.bat` (Windows)
Double-click `start.bat` in the project root. It will automatically open your default browser to `http://localhost:8080` and host the files locally via Python.

### Option 2: Python HTTP Server (Command Line)
```bash
python -m http.server 8080
```
Then visit [http://localhost:8080](http://localhost:8080) in your web browser.

### Option 3: Direct File Open
You can also directly double-click `index.html` to open it in any web browser!

---

## 📦 How to Add New Resources

All resources are managed in [`js/data.js`](js/data.js). Adding a new resource is as simple as adding an object to the `RESOURCES` array:

```javascript
{
  id: "my-resource",
  name: "My Resource Name",
  category: "mods", // 'mods' | 'resource-packs' | 'launchers' | 'macros' | 'hack-clients'
  subcategory: "Performance",
  description: "Brief summary shown on the card.",
  longDescription: "Detailed explanation shown in the details modal.",
  image: "https://example.com/preview.jpg",
  tags: ["Performance", "Fabric", "FPS"],
  version: "v1.0.0",
  minecraftVersion: "1.21.x",
  loader: "Fabric / NeoForge",
  platform: "Windows / macOS / Linux",
  resolution: null, // "16x", "32x", etc. for resource packs
  author: "CreatorName",
  officialUrl: "https://example.com",
  downloadUrl: "https://example.com/download",
  featured: true, // Set to true to show on the Home page featured section
  dateAdded: "2026-09-14",
  status: "Verified Safe"
}
```

---

## 🛡️ Safety & Rules

SNOWFALL adheres strictly to safety and community rules. All external downloads link directly to official project repositories (Modrinth, CurseForge, GitHub, or official domains). No malware, account stealers, or security bypasses are distributed.

---

## 📜 Legal Notice

Snowfall is an independent community and resource hub. It is not affiliated with Mojang or Microsoft.
Minecraft is a trademark of Mojang Synergies AB.
