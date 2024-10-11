'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter, Facebook, Menu, Users, Calendar, MessageSquare } from 'lucide-react'

export function CommunityPageComponent() {
  const [newGroup, setNewGroup] = useState('')

  const groups = [
    'Frontend Engineering',
    'Backend Engineering',
    'Data Engineering',
    'Design Engineering',
    newGroup
  ].filter(Boolean)

  const featuredCommunities = [
    { name: 'Web Dev Wizards', members: 1500, events: 25, discussions: 320, image: '/placeholder.svg?height=100&width=100' },
    { name: 'Data Science Hub', members: 1200, events: 20, discussions: 280, image: '/placeholder.svg?height=100&width=100' },
    { name: 'UX/UI Innovators', members: 980, events: 15, discussions: 210, image: '/placeholder.svg?height=100&width=100' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold">TechOps Apex</h1>
            <div className="hidden md:flex space-x-4">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Community</Button>
              <Button variant="ghost">Speakers</Button>
              <Button variant="ghost">Events</Button>
              <Button variant="ghost">Resources</Button>
              <Button variant="ghost">Contact</Button>
            </div>
            <div className="flex items-center space-x-4">
              <Button>Sign In</Button>
              <Button variant="ghost" className="md:hidden"><Menu /></Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-16">
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our TechOps Apex Community</h2>
          <p className="text-xl mb-8 text-gray-600">Connect, learn, and grow with tech professionals worldwide.</p>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Select Your Community</CardTitle>
              <CardDescription>Choose an existing group or create a new one.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your community" />
                </SelectTrigger>
                <SelectContent>
                  {groups.map((group) => (
                    <SelectItem key={group} value={group}>{group}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex space-x-2">
                <Input
                  placeholder="Create a new community"
                  value={newGroup}
                  onChange={(e) => setNewGroup(e.target.value)}
                />
                <Button onClick={() => setNewGroup('')}>Add</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h3 className="text-3xl font-bold mb-8 text-center">Featured Communities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCommunities.map((community) => (
              <Card key={community.name}>
                <CardHeader>
                  <Avatar className="w-16 h-16 mx-auto mb-4">
                    <AvatarImage src={community.image} alt={community.name} />
                    <AvatarFallback>{community.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-center">{community.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span className="flex items-center"><Users className="mr-1" size={16} /> {community.members}</span>
                    <span className="flex items-center"><Calendar className="mr-1" size={16} /> {community.events}</span>
                    <span className="flex items-center"><MessageSquare className="mr-1" size={16} /> {community.discussions}</span>
                  </div>
                  <Button className="w-full">Join Community</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-3xl font-bold mb-8 text-center">More About TechOps Apex</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p>TechOps Apex is dedicated to fostering a vibrant community of tech professionals, enabling knowledge sharing, collaboration, and career growth in the ever-evolving world of technology.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What We Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Expert-led webinars and workshops</li>
                  <li>Networking opportunities with industry leaders</li>
                  <li>Access to cutting-edge resources and tools</li>
                  <li>Mentorship programs for career development</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h3 className="text-3xl font-bold mb-8 text-center">Community Highlights</h3>
          <Tabs defaultValue="events" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="events">Upcoming Events</TabsTrigger>
              <TabsTrigger value="discussions">Hot Discussions</TabsTrigger>
              <TabsTrigger value="projects">Active Projects</TabsTrigger>
              <TabsTrigger value="jobs">Job Opportunities</TabsTrigger>
            </TabsList>
            <TabsContent value="events">
              <Card>
                <CardHeader>
                  <CardTitle>Tech Talks 2023</CardTitle>
                  <CardDescription>Join us for our annual conference featuring industry experts.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Date: September 15-17, 2023</p>
                  <p>Location: Virtual Event</p>
                  <Button className="mt-4">Register Now</Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="discussions">
              <Card>
                <CardHeader>
                  <CardTitle>The Future of AI in Software Development</CardTitle>
                  <CardDescription>A lively debate on the impact of AI on coding practices.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Started by: Jane Doe</p>
                  <p>Replies: 42</p>
                  <Button className="mt-4">Join Discussion</Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="projects">
              <Card>
                <CardHeader>
                  <CardTitle>Open Source ML Library</CardTitle>
                  <CardDescription>Contribute to our community-driven machine learning library.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Project Lead: John Smith</p>
                  <p>Contributors: 15</p>
                  <Button className="mt-4">View Project</Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="jobs">
              <Card>
                <CardHeader>
                  <CardTitle>Senior Frontend Developer</CardTitle>
                  <CardDescription>TechCorp is hiring! Join a dynamic team working on cutting-edge web applications.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Location: Remote</p>
                  <p>Posted: 2 days ago</p>
                  <Button className="mt-4">Apply Now</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h3 className="text-3xl font-bold mb-8 text-center">Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Tech Blog</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Stay updated with the latest tech trends, tutorials, and community insights.</p>
                <Button className="mt-4">Read Articles</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Learning Paths</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Curated learning resources to help you advance your tech skills.</p>
                <Button className="mt-4">Explore Paths</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tech Podcast</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Listen to interviews with tech leaders and innovators in the industry.</p>
                <Button className="mt-4">Listen Now</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">About TechOps Apex</h4>
              <p>Empowering tech professionals through community-driven learning and innovation.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Community</a></li>
                <li><a href="#" className="hover:underline">Speakers</a></li>
                <li><a href="#" className="hover:underline">Events</a></li>
                <li><a href="#" className="hover:underline">Resources</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <p>Email: info@techopsapex.com</p>
              <p>Phone: (123) 456-7890</p>
              <p>Address: 123 Tech Street, Innovation City, TC 12345</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300"><Twitter /></a>
                <a href="#" className="hover:text-gray-300"><Facebook /></a>
                <a href="#" className="hover:text-gray-300"><Linkedin /></a>
                <a href="#" className="hover:text-gray-300"><Github /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 TechOps Apex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}