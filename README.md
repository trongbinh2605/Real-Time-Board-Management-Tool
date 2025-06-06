# Real Time Board Management Tool

A frontend-focused React.js application for managing boards and tasks in real-time. This project is primarily a frontend demonstration showcasing React.js implementation and UI/UX capabilities.

## Tech Stack

- React.js
- TypeScript
- Vite
- React Router
- CSS Modules

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd Real-Time-Board-Management-Tool
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## Usage Flow

### 1. Login

- Access the login page
- Enter any email address (e.g., test@example.com)
- The system works without backend integration, so any valid email format will work

### 2. Email Verification

- After login, you'll be redirected to the verification page
- Enter any numeric verification code (e.g., 123456)
- Without verification, you cannot access the boards
- This step simulates a real verification process

### 3. Boards Dashboard

- After successful verification, you'll be redirected to the boards page
- Here you can:
  - View all boards
  - Manage board members
  - Create and organize cards
  - Move cards between lists
  - Move lists
  - See card details
  - Invite new members

## Features

- User authentication flow (Frontend only)
- Email verification simulation
- Board management
- Card creation and organization
- Drag and drop functionality

## Screenshots

Here are some screenshots showcasing the main features of the application:

### Login Page

![Login Page](/src/assets/Login-Page.jpg)

### Email Verification

![Email Verification](/src/assets/Verification-Page.jpg)

### Boards Management

![Boards Page](/src/assets/Boards-Page.jpg)

### Board Details

![Board Details](/src/assets/Board-Detail-Page.jpg)

### Card Management

![Card Details](/src/assets/Card-Details.jpg)

### Invite Members

![Invite Members](/src/assets/Invite-Modal.jpg)

## Development Notes

This is a frontend-focused project designed to demonstrate React.js implementation skills. All data is handled locally as there is no backend integration. The authentication and verification processes are simulated to demonstrate the complete user flow.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
