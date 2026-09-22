import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'node:process';

// https://vite.dev/config/
// Dynamically set base path: repo subpath in GitHub Actions, or root '/' for local dev / custom domains
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const basePath = isGitHubActions && repoName ? `/${repoName}/` : '/';

export default defineConfig({
  plugins: [react()],
  base: basePath,
});

