Use untitled ui classes, tokens and components to build reusable UI elements without creating custom styles.
Use as many components as possible.

## Tailwind CSS v4 + Untitled UI Theme System

This project uses Tailwind CSS v4 with the @theme block in `src/index.css` (not tailwind.config.js).
All colors are defined as CSS variables following Untitled UI's design system.

### Available Color Tokens:
- `brand-*` (Purple) - Main brand colors (25-950)
- `primary-*` - Alias for brand colors
- `gray-*` - Neutral colors (25-950)
- `success-*` - Green for success states (25-900)
- `error-*` - Red for error states (25-900)
- `warning-*` - Orange for warning states (25-900)

### Usage Examples:
```jsx
// Brand/Primary colors
className="bg-brand-600 text-white"
className="border-primary-300 hover:bg-primary-50"

// Gray scale
className="bg-gray-50 text-gray-900"

// Success/Error/Warning
className="text-success-700 bg-success-50"
```

## Component Guidelines

- Leverage Untitled UI's spacing tokens (space-x-*, space-y-*) for consistent margins and padding
- Utilize the design system's color palette and semantic tokens instead of arbitrary color values
- Prefer built-in typography variants (text-sm, text-lg, font-semibold) over custom font styling
- Use the provided icon set and maintain consistent icon sizing throughout the application
- Apply responsive breakpoint utilities (sm:, md:, lg:) from the design system
- Implement form components with built-in validation states and error handling
- Use layout primitives (Stack, Grid, Flex) for structural composition
- Follow the established shadow and border radius tokens for depth and consistency
- Leverage animation and transition utilities for interactive states
- Reference the design system documentation for component props and variants before implementing custom solutions


FREE UNTITLED UI COMPONENTS:
https://www.untitledui.com/react/components
https://www.untitledui.com/react/components/dashboards
https://www.untitledui.com/react/components/dashboards-02
https://www.untitledui.com/react/components/settings-pages
https://www.untitledui.com/react/components/settings-pages-02
https://www.untitledui.com/react/components/informational-pages
https://www.untitledui.com/react/components/informational-pages-02