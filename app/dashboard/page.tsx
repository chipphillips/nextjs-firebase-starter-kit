import { useState, useEffect } from 'react'
import { Bell, Calendar, FileUp, MessageSquare, PieChart, Send, Settings, User, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/toast"

// Simulated AI model for sentiment analysis
const analyzeSentiment = (text: string) => {
  const sentiments = ['Positive', 'Neutral', 'Negative']
  const randomIndex = Math.floor(Math.random() * sentiments.length)
  const score = Math.random()
  return { sentiment: sentiments[randomIndex], score }
}

// Simulated AI model for chatbot responses
const generateChatbotResponse = (message, userProfile) => {
  const responses = [
    `Thank you for your question, ${userProfile.name}. I'll do my best to assist you with your ${userProfile.projectType} project.`,
    `I understand your concern about ${userProfile.projectType} projects. Let me provide some information that might help.`,
    `That's a great question, ${userProfile.name}. Here's what I can tell you about ${userProfile.projectType} builds.`,
    `I'm checking our project management system for the most up-to-date information on your ${userProfile.projectType} project.`,
    `I've noted your request and will make sure the project manager for your ${userProfile.projectType} build is informed.`,
  ]
  const randomIndex = Math.floor(Math.random() * responses.length)
  return responses[randomIndex]
}

export default function EnhancedCustomerEngagementDashboard() {
  const [chatMessages, setChatMessages] = useState([
    { role: 'system', content: 'Hello! How can I assist you today?' },
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [milestones, setMilestones] = useState([
    { id: 1, title: 'Foundation Complete', date: '2023-06-15', status: 'completed' },
    { id: 2, title: 'Framing', date: '2023-07-01', status: 'in-progress' },
    { id: 3, title: 'Electrical and Plumbing', date: '2023-07-15', status: 'upcoming' },
    { id: 4, title: 'Insulation and Drywall', date: '2023-08-01', status: 'upcoming' },
    { id: 5, title: 'Painting', date: '2023-08-15', status: 'upcoming' },
  ])
  const [clientFiles, setClientFiles] = useState([])
  const [notifications, setNotifications] = useState([])
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    address: '123 Main St, Anytown, USA',
    projectType: 'Residential',
    preferences: 'Modern design, energy-efficient',
  })

  useEffect(() => {
    // Simulated push notification
    const notificationInterval = setInterval(() => {
      const newNotification = {
        id: Date.now(),
        message: `New update available for your ${userProfile.projectType} project.`,
        time: new Date().toLocaleTimeString(),
      }
      setNotifications(prev => [newNotification, ...prev])
      toast({
        title: "New Notification",
        description: newNotification.message,
      })
    }, 60000) // Every minute for demonstration purposes

    return () => clearInterval(notificationInterval)
  }, [userProfile.projectType])

  const sendMessage = () => {
    if (inputMessage.trim() === '') return

    setChatMessages(prev => [...prev, { role: 'user', content: inputMessage }])
    setInputMessage('')

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateChatbotResponse(inputMessage, userProfile)
      setChatMessages(prev => [...prev, { role: 'system', content: aiResponse }])
    }, 1000)
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setClientFiles(prev => [...prev, { name: file.name, size: file.size, type: file.type }])
      toast({
        title: "File Uploaded",
        description: `${file.name} has been successfully uploaded to your ${userProfile.projectType} project.`,
      })
    }
  }

  const handleProfileUpdate = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const updatedProfile = Object.fromEntries(formData.entries())
    setUserProfile(updatedProfile)
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Enhanced Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button onClick={() => toast({ title: "Notifications", description: "You have new notifications." })}>
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="updates">AI Updates</TabsTrigger>
          <TabsTrigger value="chatbot">Chatbot</TabsTrigger>
          <TabsTrigger value="satisfaction">Client Satisfaction</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Clients
                </CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">
                  +2 from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Projects
                </CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15</div>
                <p className="text-xs text-muted-foreground">
                  3 nearing completion
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Client Satisfaction
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92%</div>
                <p className="text-xs text-muted-foreground">
                  +5% from last quarter
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  AI Interactions
                </CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">573</div>
                <p className="text-xs text-muted-foreground">
                  +201 from last week
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="updates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI-Driven Automated Updates</CardTitle>
              <CardDescription>
                Recent automated messages sent to clients
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { client: userProfile.name, update: `${userProfile.projectType} project: Foundation completed. Next: Framing to begin on Monday.`, time: '2 hours ago' },
                { client: 'Jane Smith', update: 'Electrical inspection scheduled for next Thursday.', time: '1 day ago' },
                { client: 'Bob Johnson', update: 'Paint colors selected. Painting to commence in 2 weeks.', time: '3 days ago' },
              ].map((update, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={update.client} />
                    <AvatarFallback>{update.client.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{update.client}</p>
                    <p className="text-sm text-muted-foreground">{update.update}</p>
                    <p className="text-xs text-muted-foreground">{update.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="chatbot" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Chatbot</CardTitle>
              <CardDescription>
                Ask questions about your {userProfile.projectType} project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] w-full pr-4">
                <div className="space-y-4">
                  {chatMessages.map((message, index) => (
                    <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`rounded-lg p-2 max-w-[70%] ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                        {message.content}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="flex space-x-2 mt-4">
                <Input
                  placeholder="Type your message here..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <Button onClick={sendMessage}>
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="satisfaction" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Client Satisfaction Tracking</CardTitle>
              <CardDescription>
                AI-powered sentiment analysis of client interactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { client: userProfile.name, lastMessage: `The progress on my ${userProfile.projectType} project looks great, thanks for the update!` },
                  { client: 'Jane Smith', lastMessage: 'I have some concerns about the timeline.' },
                  { client: 'Bob Johnson', lastMessage: 'Can we discuss the changes to the floor plan?' },
                ].map((client, index) => {
                  const { sentiment, score } = analyzeSentiment(client.lastMessage)
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={client.client} />
                            <AvatarFallback>{client.client.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium leading-none">{client.client}</p>
                            <p className="text-sm text-muted-foreground">Last message: {client.lastMessage}</p>
                          </div>
                        </div>
                        <Badge variant={sentiment === 'Positive' ? 'default' : sentiment === 'Negative' ? 'destructive' : 'secondary'}>
                          {sentiment}
                        </Badge>
                      </div>
                      <Progress value={score * 100} className="w-full" />
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="milestones" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{userProfile.projectType} Project Milestones</CardTitle>
              <CardDescription>
                Track important dates and progress in your build
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {milestones.map((milestone) => (
                  <div key={milestone.id} className="flex items-center space-x-4">
                    <div className="flex-1">
                      <p className="text-sm font-medium leading-none">{milestone.title}</p>
                      <p className="text-sm text-muted-foreground">Due: {milestone.date}</p>
                    </div>
                    <Badge variant={
                      milestone.status === 'completed' ? 'default' :
                      milestone.status === 'in-progress' ? 'secondary' :
                      'outline'
                    }>
                      {milestone.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="files" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{userProfile.projectType} Project Files</CardTitle>
              <CardDescription>
                Upload and manage documents related to your project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="file-upload">Upload New File</Label>
                  <Input id="file-upload" type="file" onChange={handleFileUpload} />
                </div>
                <div className="space-y-2">
                  {clientFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border rounded">
                      <div>
                        <p className="text-sm font-medium">{file.name}</p>
                        <p className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(2)} KB</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <FileUp className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Profile</CardTitle>
              <CardDescription>
                Manage your personal information and project preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProfileUpdate} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" defaultValue={userProfile.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" defaultValue={userProfile.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" defaultValue={userProfile.phone} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" name="address" defaultValue={userProfile.address} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Input id="projectType" name="projectType" defaultValue={userProfile.projectType} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferences">Preferences</Label>
                    <Input id="preferences" name="preferences" defaultValue={userProfile.preferences} />
                  </div>
                </div>
                <Button type="submit">Update Profile</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px]">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-medium">{notification.message}</p>
                  <p className="text-xs text-muted-foreground">{notification.time}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setNotifications(prev => prev.filter(n => n.id !== notification.id))}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}