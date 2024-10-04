interface CardProps {
  title: string
  content: string
}

export const Card = ({ title, content }: CardProps) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm">{content}</p>
      </div>
    </div>
  )
}