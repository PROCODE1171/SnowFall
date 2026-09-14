/**
 * SNOWFALL - Resource Data System
 * =====================================================================
 * This file contains the complete resource database for Snowfall.
 * To add a new resource, simply append a new object to the `RESOURCES` array.
 * 
 * Schema:
 * - id: unique string identifier
 * - name: string (Resource display name)
 * - category: 'mods' | 'resource-packs' | 'launchers' | 'macros' | 'hack-clients'
 * - subcategory: string (Filter tag: 'Performance', 'PvP', 'FPS', 'Utility', 'Automation', etc.)
 * - description: string (Short card description)
 * - longDescription: string (Full description shown in details modal)
 * - icon: string (SVG icon or image identifier)
 * - image: string (Preview banner/screenshot URL or gradient placeholder)
 * - tags: Array<string>
 * - version: string (e.g. 'v0.5.11')
 * - minecraftVersion: string (e.g. '1.21.x', '1.20.4', 'All Versions')
 * - loader: string (e.g. 'Fabric', 'NeoForge', 'Forge', 'Vanilla', 'Quilt', 'N/A')
 * - platform: string (e.g. 'Windows', 'Windows / macOS / Linux', 'Cross-Platform')
 * - resolution: string | null (e.g. '16x', '32x', '64x', '128x' - only for resource packs)
 * - author: string
 * - officialUrl: string (Real external website / project page)
 * - downloadUrl: string (Direct or verified download/release page)
 * - featured: boolean (Shows on Home featured section)
 * - dateAdded: string (YYYY-MM-DD)
 * - status: string (e.g. 'Verified Safe', 'Open Source', 'Official')
 * =====================================================================
 */

const RESOURCES = [
  // ==========================================
  // ❄ MODS
  // ==========================================
  {
    id: "sodium",
    name: "Sodium",
    category: "mods",
    subcategory: "Performance",
    description: "High-performance rendering optimization engine for modern Minecraft clients.",
    longDescription: "Sodium is a free and open-source rendering engine replacement for the Minecraft client that greatly improves frame rates, reduces micro-stutter, and fixes graphical issues. It is considered the gold standard for Minecraft performance, often doubling or tripling FPS compared to vanilla.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    tags: ["Performance", "Fabric", "NeoForge", "FPS", "Rendering"],
    version: "v0.5.11",
    minecraftVersion: "1.21.x, 1.20.x",
    loader: "Fabric / NeoForge",
    platform: "Windows / macOS / Linux",
    resolution: null,
    author: "CaffeineMC",
    officialUrl: "https://modrinth.com/mod/sodium",
    downloadUrl: "https://modrinth.com/mod/sodium/versions",
    featured: true,
    dateAdded: "2026-08-20",
    status: "Verified Safe"
  },
  {
    id: "iris-shaders",
    name: "Iris Shaders",
    category: "mods",
    subcategory: "Performance",
    description: "Modern, open-source shaders mod compatible with Sodium and existing shaderpacks.",
    longDescription: "Iris is an open-source shaders mod designed for compatibility with Sodium and the existing ShadersMod/OptiFine shaderpacks ecosystem. Enjoy ultra-smooth shader gameplay with negligible overhead compared to legacy alternatives.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    tags: ["Shaders", "Fabric", "NeoForge", "Graphics", "Performance"],
    version: "v1.7.5",
    minecraftVersion: "1.21.x, 1.20.x",
    loader: "Fabric / NeoForge",
    platform: "Windows / macOS / Linux",
    resolution: null,
    author: "IrisTeam",
    officialUrl: "https://irisshaders.dev",
    downloadUrl: "https://modrinth.com/mod/iris/versions",
    featured: true,
    dateAdded: "2026-08-18",
    status: "Verified Safe"
  },
  {
    id: "lithium",
    name: "Lithium",
    category: "mods",
    subcategory: "Performance",
    description: "General-purpose optimization mod that improves physics, chunk loading, and mob AI.",
    longDescription: "Lithium optimizes physics calculations, mob AI behavior, world chunk ticking, and block interactions without altering vanilla mechanics. Works seamlessly on both singleplayer clients and multiplayer servers.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
    tags: ["Optimization", "Fabric", "Server", "Physics", "FPS"],
    version: "v0.12.7",
    minecraftVersion: "1.21.x, 1.20.x",
    loader: "Fabric / NeoForge",
    platform: "Windows / macOS / Linux",
    resolution: null,
    author: "CaffeineMC",
    officialUrl: "https://modrinth.com/mod/lithium",
    downloadUrl: "https://modrinth.com/mod/lithium/versions",
    featured: false,
    dateAdded: "2026-08-10",
    status: "Verified Safe"
  },
  {
    id: "ferritecore",
    name: "FerriteCore",
    category: "mods",
    subcategory: "Performance",
    description: "Significantly reduces Minecraft's RAM and memory footprint through deep deduplication.",
    longDescription: "FerriteCore optimizes memory consumption in Minecraft by removing duplicate block states, model data, and entity models. It often reduces memory consumption by hundreds of megabytes or even gigabytes, especially in heavy modpacks.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    tags: ["RAM Saver", "Memory", "Fabric", "Forge", "Optimization"],
    version: "v6.0.3",
    minecraftVersion: "1.21.x, 1.20.x, 1.19.x",
    loader: "Fabric / NeoForge / Forge",
    platform: "Windows / macOS / Linux",
    resolution: null,
    author: "malte0811",
    officialUrl: "https://modrinth.com/mod/ferrite-core",
    downloadUrl: "https://modrinth.com/mod/ferrite-core/versions",
    featured: false,
    dateAdded: "2026-08-05",
    status: "Verified Safe"
  },
  {
    id: "immediatelyfast",
    name: "ImmediatelyFast",
    category: "mods",
    subcategory: "FPS",
    description: "Accelerates immediate mode rendering for entities, HUD, text, maps, and GUI interfaces.",
    longDescription: "ImmediatelyFast is an open-source performance mod designed to speed up immediate mode rendering. It optimizes font rendering, particle drawing, HUD elements, maps, and item frames, delivering major FPS gains in crowded multiplayer lobbies.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    tags: ["FPS", "HUD", "GUI", "Entities", "Fabric"],
    version: "v1.2.18",
    minecraftVersion: "1.21.x, 1.20.x",
    loader: "Fabric / NeoForge / Forge",
    platform: "Windows / macOS / Linux",
    resolution: null,
    author: "RaphiMC",
    officialUrl: "https://modrinth.com/mod/immediatelyfast",
    downloadUrl: "https://modrinth.com/mod/immediatelyfast/versions",
    featured: true,
    dateAdded: "2026-08-25",
    status: "Verified Safe"
  },
  {
    id: "appleskin",
    name: "AppleSkin",
    category: "mods",
    subcategory: "Utility",
    description: "Adds helpful food and hunger HUD information including saturation and health restoration.",
    longDescription: "AppleSkin provides useful food and hunger information directly to the in-game HUD. It displays how much hunger and saturation a food item will restore while hovering over it, and visualizes exhaustion points.",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80",
    tags: ["Utility", "HUD", "PvP", "Survival", "Fabric", "Forge"],
    version: "v2.5.1",
    minecraftVersion: "1.21.x, 1.20.x",
    loader: "Fabric / Forge / NeoForge",
    platform: "Windows / macOS / Linux",
    resolution: null,
    author: "squeek502",
    officialUrl: "https://modrinth.com/mod/appleskin",
    downloadUrl: "https://modrinth.com/mod/appleskin/versions",
    featured: false,
    dateAdded: "2026-07-28",
    status: "Verified Safe"
  },
  {
    id: "modmenu",
    name: "Mod Menu",
    category: "mods",
    subcategory: "Utility",
    description: "Adds a clean in-game mod list screen for Fabric with search and config buttons.",
    longDescription: "Mod Menu adds a modern, categorized list of installed mods directly to the Minecraft title screen and pause menu. Quickly search through installed mods, inspect metadata, and open individual mod configuration screens.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
    tags: ["Utility", "UI", "Fabric", "Config", "Essential"],
    version: "v11.0.1",
    minecraftVersion: "1.21.x, 1.20.x",
    loader: "Fabric",
    platform: "Windows / macOS / Linux",
    resolution: null,
    author: "TerraformersMC",
    officialUrl: "https://modrinth.com/mod/modmenu",
    downloadUrl: "https://modrinth.com/mod/modmenu/versions",
    featured: false,
    dateAdded: "2026-08-01",
    status: "Verified Safe"
  },

  // ==========================================
  // 🎨 RESOURCE PACKS
  // ==========================================
  {
    id: "faithful-32x",
    name: "Faithful 32x",
    category: "resource-packs",
    subcategory: "Survival",
    description: "The classic higher-resolution upgrade honoring default Minecraft textures.",
    longDescription: "Faithful 32x is one of the most celebrated resource packs in Minecraft history. It doubles the resolution of the vanilla textures while preserving the original art style, providing crisp details without breaking immersion.",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80",
    tags: ["32x", "Survival", "Classic", "HD", "Vanilla+"],
    version: "v1.21-r1",
    minecraftVersion: "1.21.x, 1.20.x",
    loader: "Vanilla / Any",
    platform: "Cross-Platform",
    resolution: "32x",
    author: "Faithful Team",
    officialUrl: "https://faithfulpack.net",
    downloadUrl: "https://faithfulpack.net/download",
    featured: true,
    dateAdded: "2026-08-15",
    status: "Verified Safe"
  },
  {
    id: "bare-bones",
    name: "Bare Bones",
    category: "resource-packs",
    subcategory: "FPS",
    description: "Minimalist textures inspired by official Minecraft trailers and promo art.",
    longDescription: "Bare Bones is a simplistic texture pack that gives your game the vibrant, clean look of official Minecraft promotional trailers. With flat colors and crisp edges, it delivers exceptional visual clarity and fantastic FPS boosts.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
    tags: ["FPS", "Minimalist", "Trailer Style", "Low Resolution", "16x"],
    version: "v1.21",
    minecraftVersion: "1.21.x, 1.20.x",
    loader: "Vanilla / Any",
    platform: "Cross-Platform",
    resolution: "16x",
    author: "RobotPantaloons",
    officialUrl: "https://modrinth.com/resourcepack/bare-bones",
    downloadUrl: "https://modrinth.com/resourcepack/bare-bones/versions",
    featured: true,
    dateAdded: "2026-08-12",
    status: "Verified Safe"
  },
  {
    id: "default-dark-mode",
    name: "Default Dark Mode",
    category: "resource-packs",
    subcategory: "UI",
    description: "Sleek, dark-themed user interface textures for all menus, inventories, and HUD.",
    longDescription: "Tired of blinding white GUI screens during late-night gaming sessions? Default Dark Mode transforms every container, crafting grid, furnace, and inventory window into a polished obsidian dark theme while retaining vanilla item icons.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    tags: ["UI", "Dark Theme", "Clean", "Inventories", "Night Mode"],
    version: "v2024.8",
    minecraftVersion: "1.21.x, 1.20.x",
    loader: "Vanilla / Any",
    platform: "Cross-Platform",
    resolution: "16x",
    author: "nephryte",
    officialUrl: "https://modrinth.com/resourcepack/default-dark-mode",
    downloadUrl: "https://modrinth.com/resourcepack/default-dark-mode/versions",
    featured: false,
    dateAdded: "2026-08-08",
    status: "Verified Safe"
  },
  {
    id: "pvp-overhaul-16x",
    name: "Frostbite PvP 16x",
    category: "resource-packs",
    subcategory: "PvP",
    description: "Optimized PvP pack featuring low fire, short swords, clear water, and custom sky.",
    longDescription: "Frostbite PvP 16x is engineered for Bedwars, Skywars, and competitive PvP. It includes short swords for maximum visibility, transparent chat/GUI windows, lowered shield/fire view models, and custom ice-blue hit particle effects.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
    tags: ["PvP", "Bedwars", "Skywars", "Low Fire", "FPS Boost", "16x"],
    version: "v3.0",
    minecraftVersion: "1.21.x, 1.8.9",
    loader: "Vanilla / Any",
    platform: "Cross-Platform",
    resolution: "16x",
    author: "Snowfall Design",
    officialUrl: "https://modrinth.com",
    downloadUrl: "https://modrinth.com",
    featured: true,
    dateAdded: "2026-08-28",
    status: "Verified Safe"
  },
  {
    id: "fullbright-nightvision",
    name: "FullBright / Night Vision",
    category: "resource-packs",
    subcategory: "Utility",
    description: "Max gamma resource pack providing clear night vision without requiring potions.",
    longDescription: "A pure resource pack utility that sets maximum light levels across all blocks and caves. Navigate dark ravines, mine in deepslate caverns, and build underground without spamming torches or drinking Night Vision potions.",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    tags: ["Utility", "FullBright", "Mining", "Gamma", "16x"],
    version: "v1.21",
    minecraftVersion: "1.21.x, 1.20.x",
    loader: "Vanilla / Any",
    platform: "Cross-Platform",
    resolution: "16x",
    author: "Snowfall Labs",
    officialUrl: "https://modrinth.com",
    downloadUrl: "https://modrinth.com",
    featured: false,
    dateAdded: "2026-07-30",
    status: "Verified Safe"
  },

  // ==========================================
  // 🚀 LAUNCHERS
  // ==========================================
  {
    id: "prism-launcher",
    name: "Prism Launcher",
    category: "launchers",
    subcategory: "Performance",
    description: "An open-source Minecraft launcher with superior multi-instance and modpack management.",
    longDescription: "Prism Launcher is a high-performance, open-source custom Minecraft launcher that lets you manage multiple isolated instances of Minecraft with individual mod setups, worlds, and settings. Features direct one-click downloading from Modrinth, CurseForge, and FTB.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=600&q=80",
    tags: ["Open Source", "Multi-Instance", "Lightweight", "Mod Management", "Windows", "Linux", "macOS"],
    version: "v9.2",
    minecraftVersion: "Java Edition (All Versions)",
    loader: "Fabric / NeoForge / Forge / Quilt / Vanilla",
    platform: "Windows / macOS / Linux",
    resolution: null,
    author: "Prism Launcher Community",
    officialUrl: "https://prismlauncher.org",
    downloadUrl: "https://prismlauncher.org/download",
    featured: true,
    dateAdded: "2026-08-01",
    status: "Verified Safe"
  },
  {
    id: "fast-client",
    name: "Fast Client",
    category: "launchers",
    subcategory: "Performance",
    description: "A lightweight Minecraft client/launcher focused on performance and a clean experience.",
    longDescription: "Fast Client is a streamlined client environment designed specifically to squeeze maximum FPS and lower input latency on both low-end laptops and high-refresh gaming rigs. Preconfigured with optimized rendering flags and zero background bloat.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    tags: ["Performance", "FPS", "Lightweight", "Clean", "Windows"],
    version: "v2.4.0",
    minecraftVersion: "1.21+",
    loader: "Optimized Java Runtime",
    platform: "Windows",
    resolution: null,
    author: "Fast Client Team",
    officialUrl: "https://example.com",
    downloadUrl: "https://example.com/download",
    featured: true,
    dateAdded: "2026-08-22",
    status: "Verified Safe"
  },
  {
    id: "modrinth-app",
    name: "Modrinth App",
    category: "launchers",
    subcategory: "Utility",
    description: "The sleek, official launcher and mod manager powered by the Modrinth ecosystem.",
    longDescription: "The Modrinth App is built from the ground up using modern web and Rust technologies. It provides seamless mod updates, modpack creation, profile sharing, and lightning-fast downloads from the open-source Modrinth platform.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    tags: ["Official", "Open Source", "Modrinth", "Modern UI", "Cross-Platform"],
    version: "v0.8.4",
    minecraftVersion: "All Versions",
    loader: "Fabric / NeoForge / Forge / Quilt",
    platform: "Windows / macOS / Linux",
    resolution: null,
    author: "Modrinth",
    officialUrl: "https://modrinth.com/app",
    downloadUrl: "https://modrinth.com/app",
    featured: true,
    dateAdded: "2026-08-16",
    status: "Verified Safe"
  },
  {
    id: "lunar-client",
    name: "Lunar Client",
    category: "launchers",
    subcategory: "PvP",
    description: "All-in-one competitive PvP client with built-in mods, cosmetics, and performance boosts.",
    longDescription: "Lunar Client is a premier third-party Minecraft client tailored for multiplayer PvP servers like Hypixel. It packages dozens of popular mods (Keystrokes, Armor Status, CPS counter, Motion Blur) and includes proprietary performance enhancements.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
    tags: ["PvP", "Bedwars", "Keystrokes", "FPS", "Cosmetics"],
    version: "v3.2.0",
    minecraftVersion: "1.8.9, 1.12.2, 1.20+, 1.21+",
    loader: "Built-in Lunar Engine",
    platform: "Windows / macOS / Linux",
    resolution: null,
    author: "Moonsworth",
    officialUrl: "https://www.lunarclient.com",
    downloadUrl: "https://www.lunarclient.com/download",
    featured: false,
    dateAdded: "2026-07-25",
    status: "Verified Safe"
  },
  {
    id: "feather-client",
    name: "Feather Client",
    category: "launchers",
    subcategory: "Performance",
    description: "Modern Minecraft client that combines FPS optimization with native Forge/Fabric mod support.",
    longDescription: "Feather Client blends the convenience of all-in-one PvP clients with the flexibility of custom mod loading. Add your own mods while enjoying low ping routing, built-in voice chat, and social party systems.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
    tags: ["Modded", "Voice Chat", "Performance", "Party System"],
    version: "v2.1",
    minecraftVersion: "1.8.9, 1.20+, 1.21+",
    loader: "Fabric / Forge",
    platform: "Windows / macOS",
    resolution: null,
    author: "Feather Team",
    officialUrl: "https://feathermc.com",
    downloadUrl: "https://feathermc.com/download",
    featured: false,
    dateAdded: "2026-07-15",
    status: "Verified Safe"
  },

  // ==========================================
  // ⌨ MACROS & AUTOMATION
  // ==========================================
  {
    id: "autohotkey-suite",
    name: "Snowfall AHK Macro Toolkit",
    category: "macros",
    subcategory: "Utility",
    description: "Lightweight AutoHotkey script suite for quick chat commands, inventory toggles, and safe keybinds.",
    longDescription: "A collection of clean, open-source AutoHotkey scripts designed for Minecraft productivity. Includes fast server navigation (/hub, /spawn, /rejoin keybinds), auto-text replies, and ergonomic key remapping without any suspicious injected code.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    tags: ["Automation", "AHK", "Chat Macros", "Productivity", "Open Source"],
    version: "v1.4.0",
    minecraftVersion: "All Versions",
    loader: "Standalone Tool",
    platform: "Windows",
    resolution: null,
    author: "Snowfall Tools",
    officialUrl: "https://www.autohotkey.com",
    downloadUrl: "https://github.com",
    featured: true,
    dateAdded: "2026-08-27",
    status: "Verified Safe"
  },
  {
    id: "op-auto-clicker",
    name: "OP Auto Clicker 3.0",
    category: "macros",
    subcategory: "Automation",
    description: "Reliable, clean standalone clicker utility for ergonomic farming and accessibility.",
    longDescription: "An industry-standard, lightweight desktop auto-clicker for accessibility and repetitive in-game tasks (such as singleplayer mob farming or block placement testing). Safe, contains zero adware or trackers, and operates with custom hotkey activation.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    tags: ["Accessibility", "Clicker", "Farming", "Automation", "Standalone"],
    version: "v3.0.1",
    minecraftVersion: "All Versions",
    loader: "Standalone Executable",
    platform: "Windows",
    resolution: null,
    author: "OP Software",
    officialUrl: "https://www.opautoclicker.com",
    downloadUrl: "https://www.opautoclicker.com",
    featured: false,
    dateAdded: "2026-08-14",
    status: "Verified Safe"
  },
  {
    id: "baritone-api",
    name: "Baritone Pathfinding Tool",
    category: "macros",
    subcategory: "Utility",
    description: "Open-source pathfinding system and mining assistant for singleplayer building and exploration.",
    longDescription: "Baritone is an open-source pathfinding bot and automation library for Minecraft. It computes optimal 3D A* traversal paths through Minecraft terrain, assisting builders in clearing perimeters, flattening terrain, and navigating complex cave networks.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    tags: ["Pathfinding", "AI", "Building Helper", "Fabric", "Open Source"],
    version: "v1.10.2",
    minecraftVersion: "1.21.x, 1.20.x",
    loader: "Fabric / Forge",
    platform: "Cross-Platform",
    resolution: null,
    author: "cabaletta / Baritone",
    officialUrl: "https://github.com/cabaletta/baritone",
    downloadUrl: "https://github.com/cabaletta/baritone/releases",
    featured: true,
    dateAdded: "2026-08-20",
    status: "Open Source"
  },
  {
    id: "fastcrafting-assistant",
    name: "FastCraft Inventory Helper",
    category: "macros",
    subcategory: "Productivity",
    description: "Configurable hotkey tool for bulk inventory crafting recipes in singleplayer worlds.",
    longDescription: "Ergonomic utility to speed up repeated crafting operations in survival builds. Reduces wrist strain by executing standard recipe book transactions quickly and safely.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
    tags: ["Productivity", "Crafting", "Inventory", "Singleplayer"],
    version: "v1.2",
    minecraftVersion: "All Versions",
    loader: "Standalone",
    platform: "Windows",
    resolution: null,
    author: "Snowfall Labs",
    officialUrl: "https://github.com",
    downloadUrl: "https://github.com",
    featured: false,
    dateAdded: "2026-08-04",
    status: "Verified Safe"
  },

  // ==========================================
  // ⚡ HACK CLIENTS (Informational & Safe)
  // ==========================================
  {
    id: "meteor-client",
    name: "Meteor Client",
    category: "hack-clients",
    subcategory: "Informational",
    description: "Open-source Fabric utility mod tailored for 2b2t, anarchy servers, and custom creative sandboxes.",
    longDescription: "Meteor Client is a popular open-source Fabric utility mod primarily used on anarchy servers (such as 2b2t) and private sandbox environments. It features a modern in-game HUD, extensive command systems, and customizable render modules. Snowfall links exclusively to Meteor's official website and GitHub repository.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    tags: ["Informational", "Anarchy", "Fabric", "Open Source", "Utility"],
    version: "v0.5.8",
    minecraftVersion: "1.21.x",
    loader: "Fabric",
    platform: "Windows / macOS / Linux",
    resolution: null,
    author: "Meteor Development",
    officialUrl: "https://meteorclient.com",
    downloadUrl: "https://meteorclient.com",
    featured: true,
    dateAdded: "2026-08-25",
    status: "Official Source Only"
  },
  {
    id: "liquidbounce",
    name: "LiquidBounce",
    category: "hack-clients",
    subcategory: "Informational",
    description: "Completely open-source, community-driven utility client for Minecraft Forge and Fabric.",
    longDescription: "LiquidBounce is one of the oldest completely free and open-source utility clients in the Minecraft ecosystem. It provides extensive scripting support (JavaScript) and allows developers to experiment with client-side game engine mechanics.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    tags: ["Informational", "Open Source", "Scripting", "Fabric", "Forge"],
    version: "Nextgen v1.0",
    minecraftVersion: "1.20.x, 1.21.x",
    loader: "Fabric / Forge",
    platform: "Windows / macOS / Linux",
    resolution: null,
    author: "CCBlueX",
    officialUrl: "https://liquidbounce.net",
    downloadUrl: "https://liquidbounce.net",
    featured: false,
    dateAdded: "2026-08-10",
    status: "Official Source Only"
  },
  {
    id: "aristois",
    name: "Aristois",
    category: "hack-clients",
    subcategory: "Informational",
    description: "Versatile, user-friendly utility mod available across all modern Minecraft versions.",
    longDescription: "Aristois is a long-standing utility mod providing in-game tweaks, world interaction overlays, and custom user interfaces. Known for its automated installer supporting all major Minecraft versions.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=600&q=80",
    tags: ["Informational", "Multi-Version", "Installer", "Utility"],
    version: "v3.12",
    minecraftVersion: "1.12 to 1.21+",
    loader: "Fabric / Standalone Installer",
    platform: "Windows / macOS / Linux",
    resolution: null,
    author: "Deftware",
    officialUrl: "https://aristois.net",
    downloadUrl: "https://aristois.net",
    featured: false,
    dateAdded: "2026-07-20",
    status: "Official Source Only"
  },
  {
    id: "wurst-client",
    name: "Wurst Client",
    category: "hack-clients",
    subcategory: "Informational",
    description: "Historic open-source utility modification maintained continuously since 2014.",
    longDescription: "Wurst is an open-source Minecraft mod maintained since 2014 by Alexander01998. It has been a pioneer in showcasing Fabric modding capabilities and provides educational insight into client-side game state rendering.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
    tags: ["Informational", "Open Source", "Fabric", "Historic"],
    version: "v7.43",
    minecraftVersion: "1.21.x",
    loader: "Fabric",
    platform: "Cross-Platform",
    resolution: null,
    author: "Alexander01998",
    officialUrl: "https://www.wurstclient.net",
    downloadUrl: "https://www.wurstclient.net/download",
    featured: false,
    dateAdded: "2026-07-10",
    status: "Official Source Only"
  }
];

// Helper query object
const ResourceAPI = {
  getAll: () => RESOURCES,
  getFeatured: () => RESOURCES.filter(r => r.featured),
  getLatest: (count = 6) => [...RESOURCES].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)).slice(0, count),
  getByCategory: (category) => RESOURCES.filter(r => r.category === category),
  getById: (id) => RESOURCES.find(r => r.id === id),
  search: (query, category = null) => {
    const q = (query || "").toLowerCase().trim();
    let pool = category ? RESOURCES.filter(r => r.category === category) : RESOURCES;
    if (!q) return pool;
    return pool.filter(item => {
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchTags = item.tags.some(t => t.toLowerCase().includes(q));
      const matchAuthor = item.author.toLowerCase().includes(q);
      const matchPlatform = item.platform.toLowerCase().includes(q);
      const matchSub = item.subcategory.toLowerCase().includes(q);
      const matchMC = (item.minecraftVersion || "").toLowerCase().includes(q);
      return matchName || matchDesc || matchTags || matchAuthor || matchPlatform || matchSub || matchMC;
    });
  }
};
