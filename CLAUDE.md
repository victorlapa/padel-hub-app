# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Padel Hub" - a Next.js 15 application for padel matchmaking, built with React 19, TypeScript, and Tailwind CSS. The app uses Portuguese text
Users should be able to set their available times and dates, and clubs that they are willing to play so they can queue up to find people with similar preferences, once a game is found the users go to a game lobby where they set up and book the court

## Development Commands

- `npm run dev` - Start development server with Turbopack (fast refresh)
- `npm run build` - Build production version
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture

### UI Framework Stack

- **shadcn/ui**: Component library configured in `components.json` with "new-york" style
- **Tailwind CSS v4**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for UI components
- **Framer Motion**: Animation library for smooth transitions and interactions
- **Class Variance Authority & clsx**: For conditional CSS class management

### Project Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components
- `src/lib/` - Utility functions (includes `cn` helper for Tailwind classes)
- `@/*` path alias maps to `src/*` directory

### Styling Approach

- Uses Tailwind CSS v4 with CSS variables for theming
- `cn()` utility in `src/lib/utils.ts` combines `clsx` and `tailwind-merge` for conditional classes
- Custom CSS variables defined in `src/app/globals.css`
- Geist font family loaded via `next/font/google`

### Component Conventions

- shadcn/ui components should be placed in `src/components/ui/`
- Use `@/components`, `@/lib`, `@/utils` path aliases consistently
- Components use TypeScript with strict type checking enabled
- Follow "new-york" shadcn/ui style conventions

## Technical Configuration

### TypeScript

- Strict mode enabled with ES2017 target
- Path mapping: `@/*` resolves to `./src/*`
- Next.js TypeScript plugin configured

### ESLint

- Uses Next.js recommended configs: `next/core-web-vitals` and `next/typescript`
- Flat config format with ESLint v9

### Next.js Features

- App Router architecture (not Pages Router)
- Turbopack enabled for fast development builds
- Standard Next.js 15 configuration with minimal custom config
