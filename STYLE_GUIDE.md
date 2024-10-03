# EnhancedDashboard Style Guide

## Colors

### Primary Colors
- Primary: `#FF372F` (CoralRed 500)
- Primary Blue: `#1D81DC` (BrightNavyBlue 500)

### Secondary Colors
- Secondary (Default): `#1D81DC` (BrightNavyBlue 500)
- Secondary Teal: `#00F088` (Eucalyptus 600)
- Secondary Yellow: `#E1E934` (Dandelion 500)
- Secondary Green: `#229973` (Eucalyptus 700)
- Secondary Light Blue: `#B1DDF6`
- Secondary Darker Blue: `#006BA6`
- Secondary Light Gray: `#F5F5F5`

### Font Colors
- Dark: `#1E1E1E`
- Light: `#FEFBFB` (Snow 500)
- Gray: `#808080`

### Blue Shades
- Very Light Blue: `#E8F3FC` (BrightNavyBlue 50)
- Light Blue: `#A5CDF3` (BrightNavyBlue 200)
- Medium Blue: `#1D81DC` (BrightNavyBlue 500)
- Dark Blue: `#0C345A` (BrightNavyBlue 800)
- Navy Blue: `#061A2D` (BrightNavyBlue 900)

### Destructive Color
- Destructive: `#FF372F` (CoralRed 500)

## Typography

### Font Families
- Sans-serif: 'Inter', sans-serif
- Display: 'Oswald', sans-serif

### Font Sizes
- Use Tailwind's default font size classes: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, etc.

### Font Weights
- Use Tailwind's font weight classes: `font-normal`, `font-medium`, `font-semibold`, `font-bold`

## Layout

### Container
- Use the `container` class for main content areas
- Center containers with `mx-auto`

### Spacing
- Use Tailwind's spacing scale: `p-4`, `m-2`, `gap-6`, etc.

### Grid System
- Use Tailwind's grid classes: `grid`, `grid-cols-1`, `md:grid-cols-2`, `lg:grid-cols-4`, etc.

## Components

### Cards
- Use `bg-white rounded-lg shadow-sm` for card containers
- Apply `p-6` for card padding
- Use `hover:shadow-md` for hover effects

### Buttons
- Primary Button: `bg-primary text-white rounded-md px-4 py-2 hover:bg-opacity-90`
- Secondary Button: `bg-secondary text-white rounded-md px-4 py-2 hover:bg-opacity-90`

### Icons
- Use Lucide React icons
- Apply color classes directly to icons: `className="text-primary"`

### Form Inputs
- Use `rounded-md border border-gray-200` for input fields
- Apply `focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent` for focus states

## Responsive Design

- Use Tailwind's responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Example: `class="text-sm md:text-base lg:text-lg"`

## Accessibility

- Use semantic HTML elements
- Ensure sufficient color contrast
- Provide `aria-label` for interactive elements without visible text

## Best Practices

1. Consistently use the color palette defined in the `tailwind.config.ts`
2. Prefer utility classes over custom CSS
3. Use responsive design patterns for all components
4. Maintain a consistent spacing system using Tailwind's spacing scale
5. Use the `font-display` class for headings and `font-sans` for body text
6. Implement hover and focus states for interactive elements
7. Use the `text-shadow` utility class for improved text legibility when needed

Remember to always refer to this style guide when developing new components or pages to maintain consistency across the EnhancedDashboard project.