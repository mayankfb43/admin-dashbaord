# Atomic Design & Feature-based Architecture

This project follows an Atomic Design pattern combined with a feature-based structure to ensure scalability and maintainability.

## Folder Structure

### 1. `components/` (Shared)
Contains global, reusable components shared across the entire application.

- **Atoms**: The smallest building blocks (e.g., Buttons, Inputs, Labels).
- **Molecules**: Simple groups of atoms (e.g., FormField, SearchBar).
- **Organisms**: Complex components forming a distinct section of the interface (e.g., Navbar, Sidebar).

### 2. `features/` (Module-specific)
Contains feature-specific logic and UI. Each feature can have its own atomic structure.

- `features/[feature-name]/components/`: Contains atoms, molecules, and organisms specific only to that feature.
- Use this when a feature needs to "override" a shared component or when a component is too specific to be shared globally.

## Usage Guidelines
- Always look for a shared component first.
- If a component is highly específicos to a feature, place it in the feature's `components` directory.
- Avoid deep nesting; keep components as flat as possible within their categories.

## Path Aliases
To simplify imports, the following aliases are configured in `tsconfig.json`:
- `@shared/*` -> `components/*`
- `@features/*` -> `features/*`
- `@atoms/*` -> `components/atoms/*`
- `@molecules/*` -> `components/molecules/*`
- `@organisms/*` -> `components/organisms/*`

Example import: `import { Button } from '@atoms';` or `import { AuthForm } from '@features/auth/components';`
