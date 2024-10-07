import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { Check, HelpCircle } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Pricing() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h1>
      <p className="text-xl text-center text-gray-600 mb-12">Choose the plan that's right for your team. All plans include a 14-day free trial.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Starter</CardTitle>
            <Car

dDescription>For small teams just getting started</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">$99<span className="text-xl font-normal">/month</span></p>
            <p className="text-sm text-gray-500">Up to 25 users ($3.96/user)</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> All core training modules</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Basic analytics dashboard</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Email support (48h response time)</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Monthly content updates</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/contact">Start Free Trial</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>Professional</CardTitle>
            <CardDescription>Most popular for growing organizations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">$299<span className="text-xl font-normal">/month</span></p>
            <p className="text-sm text-gray-500">Up to 100 users ($2.99/user)</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> All Starter features, plus:</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Advanced training modules</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Team challenges & leaderboards</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Priority email support (24h response time)</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Custom reporting</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Quarterly strategy sessions</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/contact">Start Free Trial</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>For large-scale implementations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">Custom</p>
            <p className="text-sm text-gray-500">Tailored to your needs</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> All Professional features, plus:</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Unlimited users</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Dedicated account manager</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Custom integrations</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> On-site training sessions</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /> Premium support package</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Can I switch plans later?</h3>
            <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Is there a long-term contract?</h3>
            <p className="text-gray-600">No, all our plans are billed monthly and you can cancel at any time without penalty.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Do you offer discounts for non-profits?</h3>
            <p className="text-gray-600">Yes, we offer special pricing for non-profit organizations. Please contact our sales team for more information.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">What kind of support is included?</h3>
            <p className="text-gray-600">All plans include email support with varying response times. Higher-tier plans offer priority support and additional support channels.</p>
          </div>
        </div>
      </div>
      <TooltipProvider>
        <div className="mt-8 text-center">
          <Tooltip>
            <TooltipTrigger>
              <p className="text-sm text-gray-500 flex items-center justify-center">
                Need help choosing? <HelpCircle className="ml-1 h-4 w-4" />
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p>Our team is happy to help you find the right plan for your organization. Click to schedule a consultation.</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  )
}