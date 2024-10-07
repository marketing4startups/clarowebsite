import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, BarChart, Users, Zap, Lightbulb, Shield, TrendingUp, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Features() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Powerful Features to Transform Your Workplace</h1>
      <p className="text-xl text-center text-gray-600 mb-12">Discover how Claro's innovative features can revolutionize your team's mental health and productivity</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <Brain className="w-8 h-8 mb-2 text-teal-600" />
            <CardTitle>AI-Powered Personalized Training</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our AI algorithms analyze individual needs and learning styles to deliver tailored content, resulting in 95% engagement rates and 40% faster skill acquisition.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Users className="w-8 h-8 mb-2 text-teal-600" />
            <CardTitle>Interactive Team Challenges</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Foster team bonding and collective growth with our gamified group exercises, proven to increase team cohesion by 35% and boost overall productivity.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <BarChart className="w-8 h-8 mb-2 text-teal-600" />
            <CardTitle>Advanced Analytics Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Gain actionable insights with our real-time analytics. Track progress, identify trends, and measure ROI with easy-to-understand visualizations and custom reports.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Zap className="w-8 h-8 mb-2 text-teal-600" />
            <CardTitle>Micro-Learning Modules</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Bite-sized, high-impact lessons designed for busy professionals. Our micro-learning approach has shown to improve knowledge retention by 60% compared to traditional methods.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Lightbulb className="w-8 h-8 mb-2 text-teal-600" />
            <CardTitle>Continuous Content Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Stay ahead with weekly content updates based on the latest mental health research and best practices, ensuring your team always has access to cutting-edge strategies.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Shield className="w-8 h-8 mb-2 text-teal-600" />
            <CardTitle>Enterprise-Grade Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Rest easy with our bank-level encryption and strict privacy controls. We're GDPR compliant and have successfully completed SOC 2 Type II audits.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <TrendingUp className="w-8 h-8 mb-2 text-teal-600" />
            <CardTitle>Customizable Goal Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Set and monitor personal and team mental health goals. Our goal-tracking feature has helped 87% of users achieve their wellness objectives within 6 months.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <MessageSquare className="w-8 h-8 mb-2 text-teal-600" />
            <CardTitle>In-App Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Access our dedicated support team through the app for quick responses to your questions and concerns. Our average response time is under 2 hours during business hours.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Experience the Claro Difference Today</h2>
        <p className="text-xl text-gray-600 mb-6">Join the 500+ companies that have transformed their workplace mental health</p>
        <Button asChild size="lg">
          <Link href="/contact">Schedule a Free Demo</Link>
        </Button>
      </div>
    </div>
  )
}