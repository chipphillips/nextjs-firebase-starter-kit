// LoadingSpinner component: Displays a spinning animation to indicate loading state
export default function LoadingSpinner() {
  return (
    // Container to center the spinner both horizontally and vertically
    <div className="flex justify-center items-center h-full">
      {/* 
        The spinner itself:
        - animate-spin: Creates a rotating animation
        - rounded-full: Makes it circular
        - h-16 w-16: Sets the size to 4rem (64px) square, which is half the original size
        - border-t-2 border-b-2: Creates top and bottom borders for the spinning effect
        - border-blue-500: Sets the border color to a shade of blue
      */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )
}