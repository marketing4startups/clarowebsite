import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Users, BarChart, CheckCircle, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-teal-500 to-teal-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Transform Your Workplace Mental Health
              </h1>
              <p className="mx-auto max-w-[700px] text-teal-100 md:text-xl">
                Empower your team with Claro, the leading mental health training app trusted by companies worldwide. Our comprehensive platform provides the tools and resources needed to create a supportive, productive, and mentally healthy work environment.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="flex-1 bg-white text-gray-800"
                  placeholder="Enter your work email"
                  type="email"
                  required
                />
                <Button type="submit" className="bg-yellow-400 text-gray-800 hover:bg-yellow-500">Get Free Demo</Button>
              </form>
            </div>
            <p className="text-sm text-teal-100">Experience the Claro difference with our 14-day free trial • No credit card required</p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-800">Why HR Leaders Choose Claro</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our platform is designed to address the unique challenges of workplace mental health. With Claro, you're not just getting a training app – you're gaining a comprehensive solution that evolves with your team's needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-sky-50 border-teal-200">
              <CardHeader>
                <Brain className="w-8 h-8 mb-2 text-teal-600" />
                <CardTitle className="text-teal-700">Evidence-Based Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Our modules are developed by leading mental health experts and are grounded in the latest psychological research. This ensures that your team receives the most effective and up-to-date training available.</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Continuously updated content</li>
                  <li>Tailored to various learning styles</li>
                  <li>Practical, actionable strategies</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-sky-50 border-teal-200">
              <CardHeader>
                <Users className="w-8 h-8 mb-2 text-teal-600" />
                <CardTitle className="text-teal-700">Interactive Team Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Foster a culture of support and understanding with our engaging team activities. These challenges are designed to improve communication, empathy, and collective well-being.</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Builds team cohesion</li>
                  <li>Promotes open dialogue</li>
                  <li>Gamified learning experience</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-sky-50 border-teal-200">
              <CardHeader>
                <BarChart className="w-8 h-8 mb-2 text-teal-600" />
                <CardTitle className="text-teal-700">Comprehensive Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Gain valuable insights into your team's mental health and engagement with our advanced analytics dashboard.</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Track progress and trends</li>
                  <li>Identify areas for improvement</li>
                  <li>Measure ROI of mental health initiatives</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-gray-800">Experience the Claro Difference</h2>
              <p className="text-xl text-gray-600 mb-8">
                Implementing Claro in your workplace doesn't just improve mental health – it transforms your entire organizational culture. Here's how Claro can make a lasting impact:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-700">Significantly reduce workplace stress: </span>
                    <span className="text-gray-600">Our targeted interventions and coping strategies help employees manage stress effectively, leading to a calmer, more focused work environment.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-700">Boost employee productivity: </span>
                    <span className="text-gray-600">By addressing mental health concerns, Claro helps remove barriers to productivity, allowing your team to perform at their best.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-700">Improve employee retention rates: </span>
                    <span className="text-gray-600">Show your team you care about their well-being. Employees who feel supported are more likely to stay and grow with your company.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-700">Enhance team morale and collaboration: </span>
                    <span className="text-gray-600">Our team challenges and shared learning experiences foster a sense of community and improve interpersonal relationships.</span>
                  </div>
                </li>
              </ul>
              <Button asChild size="lg" className="mt-8 bg-teal-600 hover:bg-teal-700 text-white">
                <Link href="/contact">Schedule a Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="relative h-[500px]">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Happy employees using Claro"
                className="absolute inset-0 object-cover w-full h-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}