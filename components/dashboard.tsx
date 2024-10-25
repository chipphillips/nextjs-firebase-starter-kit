'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, Bell, User, Sun, Moon, BarChart2, Settings, FileText, 
  PieChart, Activity, Clipboard, Calculator, Calendar, Shield, 
  Droplet, CheckSquare, Zap, FileText as FileTextIcon, Box,
  ChevronRight, ChevronLeft, ThumbsUp, LogOut, Mic, Home,
  Users, TrendingUp, MessageSquare, HardHat, ChevronDown, ChevronUp,
  PlusCircle
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface AITool {
  id: string
  icon: React.ReactNode
  label: string
  description: string
  votes: number
  detailedDescription: string
  releaseDate?: string
}

interface User {
  id: string
  name: string
  email: string
  avatar: string
  companyName: string
  companyLogo?: string
  hardHatColor: string
  lastVotedDate?: string
  votesRemaining: number
}

interface Notification {
  id: string
  title: string
  description: string
  isRead: boolean
  date: string
}

interface NewsAlert {
  id: string
  title: string
  description: string
  icon: string
  isRead: boolean
}

const initialAITools: AITool[] = [
  { 
    id: '1', 
    icon: <Clipboard size={24} />, 
    label: 'Project Documentation', 
    description: 'AI-powered document management', 
    votes: 120,
    detailedDescription: 'Our AI-powered Project Documentation tool revolutionizes the way you manage and organize your construction documents. It uses advanced natural language processing to automatically categorize, tag, and index your documents, making them easily searchable and accessible. The tool also suggests relevant documents based on your current project phase and can even generate summary reports of key project information.',
    releaseDate: '2024-06-15'
  },
  { 
    id: '2', 
    icon: <Calculator size={24} />, 
    label: 'Cost Estimator', 
    description: 'Accurate AI cost predictions', 
    votes: 95,
    detailedDescription: 'The AI Cost Estimator leverages machine learning algorithms trained on thousands of past projects to provide highly accurate cost predictions. It takes into account factors such as location, materials, labor costs, and even current market trends to give you the most up-to-date estimates. The tool can also suggest cost-saving alternatives and highlight potential budget risks.',
    releaseDate: '2024-07-01'
  },
  { 
    id: '3', 
    icon: <Calendar size={24} />, 
    label: 'Schedule Optimizer', 
    description: 'AI-driven project scheduling', 
    votes: 88,
    detailedDescription: 'Our Schedule Optimizer uses AI to create the most efficient project timelines. It analyzes dependencies between tasks, resource availability, and potential risks to create optimized schedules. The tool can also simulate various scenarios to help you prepare for different situations and automatically adjust the schedule as the project progresses.',
    releaseDate: '2024-08-15'
  },
  { 
    id: '4', 
    icon: <Shield size={24} />, 
    label: 'Safety Risk Predictor', 
    description: 'ML-based safety analysis', 
    votes: 76,
    detailedDescription: 'The Safety Risk Predictor uses machine learning to analyze historical safety data, current site conditions, and project specifics to identify potential safety hazards before they occur. It provides daily safety briefings, customized safety checklists, and real-time alerts to help maintain a safe work environment.',
    releaseDate: '2024-09-01'
  },
  { 
    id: '5', 
    icon: <Droplet size={24} />, 
    label: 'Material Waste Reducer', 
    description: 'Optimize material usage', 
    votes: 62,
    detailedDescription: 'Our Material Waste Reducer tool uses AI to optimize your material usage, reducing waste and saving costs. It analyzes your project plans and suggests the most efficient ways to use materials, taking into account standard sizes and minimizing offcuts. The tool also tracks material usage in real-time and can predict future needs to prevent overordering.',
    releaseDate: '2024-10-01'
  },
  { 
    id: '6', 
    icon: <CheckSquare size={24} />, 
    label: 'Quality Control', 
    description: 'AI-powered defect detection', 
    votes: 58,
    detailedDescription: 'The AI Quality Control tool uses computer vision to detect defects and quality issues in real-time. It can be used with mobile devices or drones to scan work areas, comparing the actual state with the project plans and identifying discrepancies. The tool also learns from each project, continuously improving its defect detection capabilities.',
    releaseDate: '2024-11-15'
  },
]

const initialNewsAlerts: NewsAlert[] = [
  {
    id: '1',
    title: 'Countdown to AI construction tools!',
    description: 'While these tools are not quite ready for launch, we wanted to give you a sneak peek. As a valued user, you\'ll be notified as soon as these tools are released and ready for use.',
    icon: '/coming-soon-icon.png',
    isRead: false
  },
  {
    id: '2',
    title: 'Your input is invaluable to us!',
    description: 'Vote daily to shape our priorities. Your input directly influences our development roadmap. Thanks for being a key part of our journey!',
    icon: '/vote-icon.png',
    isRead: false
  }
]

const menuItems = [
  { icon: <Home size={18} />, label: 'Dashboard', href: '/dashboard' },
  { icon: <FileText size={18} />, label: 'Projects', href: '/projects' },
  { icon: <Zap size={18} />, label: 'AI Tools', href: '/ai-tools' },
  { icon: <MessageSquare size={18} />, label: 'Communication', href: '/communication' },
  { icon: <Calendar size={18} />, label: 'Scheduling', href: '/scheduling' },
  { icon: <TrendingUp size={18} />, label: 'Supply Chain', href: '/supply-chain' },
  { icon: <BarChart2 size={18} />, label: 'Analytics', href: '/analytics' },
  { icon: <Users size={18} />, label: 'Team Management', href: '/team' },
]

const bottomMenuItems = [
  { icon: <Bell size={18} />, label: 'Notifications', href: '/notifications' },
  { icon: <BarChart2 size={18} />, label: 'Analytics', href: '/analytics' },
  { icon: <Activity size={18} />, label: 'Performance Metrics', href: '/metrics' },
  { icon: <PieChart size={18} />, label: 'AI Training', href: '/ai-training' },
  { icon: <FileText size={18} />, label: 'Resource Library', href: '/resources' },
]

const hardHatColors = ['black', 'green', 'red', 'blue', 'yellow']

export function DashboardComponent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [tools, setTools] = useState(initialAITools)
  const [user, setUser] = useState<User | null>(null)
  const [aiReadinessScore, setAiReadinessScore] = useState(0)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [newsAlerts, setNewsAlerts] = useState(initialNewsAlerts)
  const [isNewsAlertsCollapsed, setIsNewsAlertsCollapsed] = useState(false)
  const [weather, setWeather] = useState({ temp: 0, high: 0, low: 0, condition: 'sunny' })
  const [newToolSuggestion, setNewToolSuggestion] = useState('')
  const [isNewToolDialogOpen, setIsNewToolDialogOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setUser({
      id: '1',
      name: 'Chip',
      email: 'chip@example.com',
      avatar: 'https://i.pravatar.cc/150?img=68',
      companyName: 'Costal Custom Homes',
      hardHatColor: 'blue',
      votesRemaining: 5
    })

    setAiReadinessScore(78)

    setNotifications([
      { id: '1', title: 'New project assigned', description: 'You have been assigned to Project X', isRead: false, date: '2024-03-15' },
      { id: '2', title: 'Meeting reminder', description: 'Team meeting in 30 minutes', isRead: false, date: '2024-03-15' },
    ])

    setWeather({ temp: 82, high: 85, low: 75, condition: 'sunny' })

    // Highlight new alerts on login
    const hasUnreadAlerts = newsAlerts.some(alert => !alert.isRead)
    if (hasUnreadAlerts) {
      toast({
        title: "New Alerts",
        description: "You have unread news and alerts. Check them out!",
        duration: 5000,
      })
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleVote = (id: string) => {
    if (user && user.votesRemaining > 0) {
      setTools(prevTools =>
        prevTools.map(tool =>
          tool.id === id ? { ...tool, votes: tool.votes + 1 } : tool
        )
      )
      setUser(prevUser => 
        prevUser ? { ...prevUser, votesRemaining: prevUser.votesRemaining - 1 } : null
      )
      toast({
        title: "Vote Recorded",
        description: `You have ${user.votesRemaining - 1} votes remaining today.`,
        duration: 3000,
      })
    } else {
      toast({
        title: "Voting Limit Reached",
        description: "You've used all your votes for today. Come back tomorrow!",
        duration: 3000,
      })
    }
  }

  const handleLogout = () => {
    setUser(null)
    router.push('/login')
  }

  const markNotificationAsRead = (id: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    )
  }

  const markNewsAlertAsRead = (id: string) => {
    setNewsAlerts(prevAlerts =>
      prevAlerts.map(alert =>
        alert.id === id ? { ...alert, isRead: true } : alert
      )
    )
  }

  const toggleNewsAlertsCollapse = () => {
    setIsNewsAlertsCollapsed(!isNewsAlertsCollapsed)
  }

  const handleNewToolSuggestion = () => {
    if (newToolSuggestion.trim()) {
      toast({
        title: "Thank you for your suggestion!",
        description: "We've received your idea and will consider it for future development.",
        duration: 5000,
      })
      setNewToolSuggestion('')
      setIsNewToolDialogOpen(false)
    }
  }

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }

  const getWeatherIcon = () => {
    switch (weather.condition) {
      case 'sunny':
        return <Sun size={24} />
      case 'cloudy':
        return <Cloud size={24} />
      case 'rainy':
        return <CloudRain size={24} />
      default:
        return <Sun size={24} />
    }
  }

  const changeHardHatColor = (color: string) => {
    setUser(prevUser => prevUser ? { ...prevUser, hardHatColor: color } : null)
  }

  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900'
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white'
  const sidebarBg = isDarkMode ? 'bg-gray-800' : 'bg-gray-200'

  if (!user) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-300 flex`}>
      {/* Sidebar */}
      <aside className={`${sidebarBg} w-64 fixed left-0 top-0 bottom-0 z-50 flex  flex-col overflow-y-auto`}>
        <div className="p-4 flex-grow">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Image src="/constructiv-ai-logo.png" alt="Constructiv AI Logo" width={40} height={40} />
              <h2 className="text-xl font-bold ml-2">Constructiv AI</h2>
            </div>
          </div>
          <nav className="mb-8">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="flex items-center p-2 rounded hover:bg-gray-700 transition-colors duration-200">
                    {item.icon}
                    <span className="ml-2">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        {/* Bottom menu items */}
        <div className="p-4 border-t border-gray-700">
          <ul className="space-y-2">
            {bottomMenuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="flex items-center p-2 rounded hover:bg-gray-700 transition-colors duration-200">
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <header className="flex justify-between items-center p-4 border-b border-gray-700">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              {user.companyLogo ? (
                <Image src={user.companyLogo} alt={`${user.companyName} Logo`} width={40} height={40} />
              ) : (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <HardHat size={40} color={user.hardHatColor} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    <div className="flex justify-around">
                      {hardHatColors.map(color => (
                        <Button
                          key={color}
                          variant="ghost"
                          size="icon"
                          className={`w-6 h-6 rounded-full bg-${color}`}
                          onClick={() => changeHardHatColor(color)}
                        />
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              )}
              <h1 className="text-2xl font-bold ml-2">{user.companyName}</h1>
            </div>
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search tools, projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
            </form>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="ghost" aria-label="AI Voice Assistant">
                    <Mic size={20} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>AI Voice Assistant</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon" variant="ghost" aria-label="Notifications">
                  <div className="relative">
                    <Bell size={20} />
                    {notifications.some(n => !n.isRead) && (
                      <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 text-xs flex items-center justify-center">
                        {notifications.filter(n => !n.isRead).length}
                      </span>
                    )}
                  </div>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Notifications</DialogTitle>
                  <DialogDescription>
                    {notifications.map(notification => (
                      <div key={notification.id} className="flex items-center justify-between py-2">
                        <div>
                          <h3 className="font-semibold">{notification.title}</h3>
                          <p className="text-sm text-gray-500">{notification.description}</p>
                          <p className="text-xs text-gray-400">{notification.date}</p>
                        </div>
                        <Checkbox
                          checked={notification.isRead}
                          onCheckedChange={() => markNotificationAsRead(notification.id)}
                        />
                      </div>
                    ))}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon" variant="ghost" aria-label="User profile">
                  <Avatar>
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>User Profile</DialogTitle>
                  <DialogDescription>
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{user.name}</h3>
                        <p className="text-sm text-gray-500">{user.email}</p>
                        <p className="text-sm text-gray-500">{user.companyName}</p>
                      </div>
                    </div>
                    <Button onClick={handleLogout} variant="outline" className="w-full">
                      <LogOut className="mr-2 h-4 w-4" /> Log out
                    </Button>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </header>

        <main className="p-6">
          <section className="mb-8">
  <h2 className="text-2xl font-bold mb-4">AI Readiness Assessment</h2>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div className="space-y-4">
      <p className="text-sm text-gray-500 max-w-prose leading-relaxed tracking-wide">
        Evaluate your company's AI preparedness with our comprehensive assessment tool. 
        This assessment will help you identify areas for improvement and provide actionable 
        insights to enhance your AI capabilities. Click 'Start Assessment' to begin your 
        journey towards AI excellence.
      </p>
      <Card className={`${cardBg} hover:shadow-lg transition-shadow duration-300`}>
        <CardHeader>
          <CardTitle>Take the Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 mb-4">
            Start your AI readiness journey today.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Start Assessment</Button>
        </CardFooter>
      </Card>
    </div>
    <Card className={`${cardBg} hover:shadow-lg transition-shadow duration-300`}>
      <CardHeader>
        <CardTitle>AI Readiness Score</CardTitle>
        <CardDescription>Your company's AI preparedness</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Score: {aiReadinessScore}%</span>
            <span>Advanced</span>
          </div>
          <Progress value={aiReadinessScore} className="w-full" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Detailed Report</Button>
      </CardFooter>
    </Card>
  </div>
</section>

          <Separator className="my-8 border-dashed" />

          {/* News & Alerts Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">News & Alerts</h2>
              <Button variant="ghost" onClick={toggleNewsAlertsCollapse}>
                {isNewsAlertsCollapsed ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
              </Button>
            </div>
            <AnimatePresence>
              {!isNewsAlertsCollapsed && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {newsAlerts.map((alert) => (
                      <Alert key={alert.id} variant={alert.isRead ? "default" : "destructive"}>
                        <Image src={alert.icon} alt={alert.title} width={24} height={24} className="mr-2" />
                        <AlertTitle>{alert.title}</AlertTitle>
                        <AlertDescription>{alert.description}</AlertDescription>
                        {!alert.isRead && (
                          <Button variant="outline" size="sm" className="mt-2" onClick={() => markNewsAlertAsRead(alert.id)}>
                            Mark as Read
                          </Button>
                        )}
                      </Alert>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          <Separator className="my-8 border-dashed" />

          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">AI Tools</h2>
              <Button onClick={() => setIsNewToolDialogOpen(true)}>
                <PlusCircle className="mr-2 h-4 w-4" /> Suggest New Tool
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.map((tool) => (
                <Card key={tool.id} className={`${cardBg} hover:shadow-lg transition-shadow duration-300`}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        {tool.icon}
                        <span className="ml-2">{tool.label}</span>
                      </span>
                      <Badge variant="secondary">{tool.votes} votes</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{tool.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Learn More</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{tool.label}</DialogTitle>
                          <DialogDescription>
                            <p className="mb-4">{tool.detailedDescription}</p>
                            {tool.releaseDate && (
                              <p className="text-sm text-gray-500">
                                Expected release date: {new Date(tool.releaseDate).toLocaleDateString()}
                              </p>
                            )}
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" onClick={() => handleVote(tool.id)}>
                            <ThumbsUp size={20} />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Vote for this tool ({user.votesRemaining} votes remaining)</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-8 text-center p-4 border-t border-gray-700">
          <p>&copy; 2024 Constructiv AI. All rights reserved.</p>
        </footer>
      </div>

      {/* New Tool Suggestion Dialog */}
      <Dialog open={isNewToolDialogOpen} onOpenChange={setIsNewToolDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Suggest a New AI Tool</DialogTitle>
            <DialogDescription>
              We value your input! Please describe the AI tool you'd like to see developed.
            </DialogDescription>
          </DialogHeader>
          <Textarea
            placeholder="Describe your idea for a new AI tool..."
            value={newToolSuggestion}
            onChange={(e) => setNewToolSuggestion(e.target.value)}
          />
          <DialogFooter>
            <Button onClick={handleNewToolSuggestion}>Submit Suggestion</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}