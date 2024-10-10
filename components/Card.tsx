// Define the structure of props that the Card component expects
interface CardProps {
  title: string    // The title of the card
  content: string  // The main content of the card
}

// Card component: A reusable UI element for displaying information in a structured format
export const Card = ({ title, content }: CardProps) => {
  return (
    // Outer container with styling for a card-like appearance
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      // Inner container for content padding
      <div className="p-6">
        // Card title with larger, bold text
        <h3 className="text-lg font-semibold">{title}</h3>
        // Card content with smaller text and top margin for separation from title
        <p className="mt-2 text-sm">{content}</p>
      </div>
    </div>
  )
}