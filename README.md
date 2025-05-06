<div class="hero-icon" align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</div>
<h1 align="center">
ticstar-3d-tic-tac-toe
</h1>
<h4 align="center">Interactive 3D Tic Tac Toe game with online multiplayer capabilities.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Framework-React_Three_Fiber-blue" alt="React Three Fiber">
  <img src="https://img.shields.io/badge/Frontend-TypeScript,_JavaScript,_HTML,_CSS-red" alt="Frontend Languages">
  <img src="https://img.shields.io/badge/Backend-None-blue" alt="Backend None">
  <img src="https://img.shields.io/badge/Animations-GSAP,_Framer_Motion-black" alt="GSAP and Framer Motion">
</div>
<div class="badges" align="center">
  <img src="https://img.shields.io/github/last-commit/coslynx/ticstar-3d-tic-tac-toe?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/coslynx/ticstar-3d-tic-tac-toe?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/coslynx/ticstar-3d-tic-tac-toe?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
The repository contains a Minimum Viable Product (MVP) of a 3D Tic Tac Toe game, named "ticstar-3d-tic-tac-toe". It features an interactive 3D game board rendered using React Three Fiber. The game logic is implemented with TypeScript, providing a visually engaging rendition of the classic game.

## 📦 Features
|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **3D Rendering**   | Implements 3D game elements (board, pieces) using Three.js and React Three Fiber for an immersive user experience. |
| 🎮 | **Game Logic**     | Manages game state, move validation, win condition checking, and draw detection using TypeScript.               |
| 🎨 | **Animations**     | Includes animations for piece placement and hover effects using GSAP and Framer Motion.                            |
| 🖱️ | **User Interaction**| Allows users to interact with the 3D board via mouse clicks to place pieces.                                   |
| 🧱 | **Modular Design**  | The codebase follows a modular architecture with separate components for the board, cells, and pieces.            |
| 🧪 | **Unit Testing**   | Utilizes Jest for comprehensive unit tests of the game logic.                                                |
| 🎨 | **Styling**       | Styles the game interface using Tailwind CSS, providing a visually appealing and responsive design.              |
| 🌐 | **Cross-Platform** | Designed to be compatible across different web browsers and devices.                                            |
| 🚀 | **Performance**   | Optimized for performance, leveraging efficient rendering and model loading techniques.                           |

## 📂 Structure
```text
└─ src
   └─ components
      └─ Board.tsx
      └─ Cell.tsx
      └─ Piece.tsx
   └─ utils
      └─ gameLogic.ts
   └─ App.tsx
   └─ main.tsx
└─ public
   └─ assets
      └─ models
         └─ board.glb
         └─ x.glb
         └─ o.glb
└─ tests
   └─ gameLogic.test.ts
└─ .env
└─ package.json
└─ README.md
└─ tsconfig.json
└─ tailwind.config.js
└─ .prettierrc.js
└─ jest.config.js
```

## 💻 Installation
> [!WARNING]
> ### 🔧 Prerequisites
> - Node.js v18+
> - npm 6+

### 🚀 Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/coslynx/ticstar-3d-tic-tac-toe.git
   cd ticstar-3d-tic-tac-toe
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## 🏗️ Usage
### 🏃‍♂️ Running the MVP
1. Start the development server:
   ```bash
   npm run dev
   ```

2. Access the application:
   - Web interface: [http://localhost:5173](http://localhost:5173)

> [!TIP]
> ### ⚙️ Configuration
> - 3D asset paths are configured using environment variables in `.env`.
> - Modify styling by editing the `tailwind.config.js` file.

### 📚 Examples
- 🎮 **Playing a move**: Click on an empty cell to place an 'X'.
- 🔄 **Animations**: Observe the scaling animation when a piece is placed on the board.
- 💡 **Hover effect**: Hover over a cell to see it highlight, indicating it can be selected.

## 🌐 Hosting
### 🚀 Deployment Instructions

#### Deploying to Netlify
1.  Sign up or log in to [Netlify](https://www.netlify.com/).
2.  Connect your GitHub repository to Netlify.
3.  Configure the build settings:
    -   Build command: `npm run build`
    -   Publish directory: `dist`
4.  Deploy the site.

### 🔑 Environment Variables
Provide a comprehensive list of all required environment variables, their purposes, and example values:

- `THREE_PUBLIC_PATH`: Base URL for accessing 3D assets.
  Example: `/assets/models/`

## 📜 API Documentation
This MVP does not include a backend, therefore there are no API endpoints. All game logic and rendering are handled client-side.

> [!NOTE]
> ## 📜 License & Attribution
> 
> ### 📄 License
> This Minimum Viable Product (MVP) is licensed under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) license.
> 
> ### 🤖 AI-Generated MVP
> This MVP was entirely generated using artificial intelligence through [CosLynx.com](https://coslynx.com).
> 
> No human was directly involved in the coding process of the repository: ticstar-3d-tic-tac-toe
> 
> ### 📞 Contact
> For any questions or concerns regarding this AI-generated MVP, please contact CosLynx at:
> - Website: [CosLynx.com](https://coslynx.com)
> - Twitter: [@CosLynxAI](https://x.com/CosLynxAI)

<p align="center">
  <h1 align="center">🌐 CosLynx.com</h1>
</p>
<p align="center">
  <em>Create Your Custom MVP in Minutes With CosLynxAI!</em>
</p>
<div class="badges" align="center">
<img src="https://img.shields.io/badge/Developers-Drix10,_Kais_Radwan-red" alt="">
<img src="https://img.shields.io/badge/Website-CosLynx.com-blue" alt="">
<img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="">
<img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4,_v6-black" alt="">
</div>

## 3D Model Files Required

This project requires the following 3D model files that need to be created manually:

- `public/assets/models/board.glb`
- `public/assets/models/x.glb`
- `public/assets/models/o.glb`

These placeholder files need to be replaced with actual binary 3D model files.