// Import necessary components and icons for the sidebar
import Link from 'next/link'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  LayoutDashboard, 
  Lightbulb, 
  UserCircle 
} from "lucide-react"

// Sidebar component: Displays navigation menu for the application
const Sidebar = () => {
  return (
    // Main container for the sidebar with a fixed width
    <div className="pb-12 w-64">
      {/* Scrollable area to accommodate varying screen sizes */}
      <ScrollArea className="h-full py-6 pl-4 pr-6">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            {/* Menu title */}
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Menu
            </h2>
            {/* Navigation buttons container */}
            <div className="space-y-1">
              {/* Dashboard navigation button */}
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link href="/dashboard">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
              {/* AI Tools navigation button */}
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link href="/ai-tools">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  AI Tools
                </Link>
              </Button>
              {/* User Profile navigation button */}
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link href="/profile">
                  <UserCircle className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

// Export the Sidebar component for use in other parts of the application
export default Sidebar