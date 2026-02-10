# Deployment Guide

This guide explains how to deploy your Next.js portfolio to the public internet.

## Prerequisite: Push to GitHub
Before deploying, your code needs to be on a Git provider like GitHub.
1.  Initialize git if not already done: `git init`
2.  Add files: `git add .`
3.  Commit: `git commit -m "Initial commit"`
4.  Create a new repository on GitHub.
5.  Link and push:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```

## Option 1: Vercel (Recommended)
Vercel is the creators of Next.js and provides the best integration.

1.  Go to [Vercel.com](https://vercel.com) and sign up/login with GitHub.
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your `portfolio` repository from the list.
4.  In "Configure Project", the default settings are usually correct:
    *   **Framework Preset**: Next.js
    *   **Root Directory**: `./` (or `portfolio-app` if you kept that structure, but it seems you are in the root now)
5.  Click **Deploy**.
6.  Wait for the build to finish. Your site will be live at `https://your-project-name.vercel.app`.

## Option 2: Netlify
1.  Go to [Netlify.com](https://netlify.com) and sign up/login.
2.  Click **"Add new site"** -> **"Import an existing project"**.
3.  Select **GitHub**.
4.  Choose your repository.
5.  **Build Settings**:
    *   **Build command**: `npm run build`
    *   **Publish directory**: `.next` (Netlify usually detects Next.js automatically and installs the plugin)
6.  Click **Deploy site**.

## Manual Build
To test the production build locally before deploying:
1.  Run `npm run build`
2.  Run `npm start`
3.  Open `http://localhost:3000` to verify everything works as expected.
