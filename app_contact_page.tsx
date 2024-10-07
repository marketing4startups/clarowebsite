'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log(formData)
    toast({
      title: "Form submitted!",
      description: "We'll be in touch soon.",
    })
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      company: '',
      employees: '',
      message: ''
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Get in Touch</h1>
      <p className="text-xl text-center text-gray-600 mb-12">We're here to help. Fill out the form below and we'll be in touch as soon as possible.</p>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
            <Input
              id="company"
              name="company"
              type="text"
              required
              value={formData.company}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="employees" className="block text-sm font-medium text-gray-700">Number of Employees</label>
            <Select name="employees" value={formData.employees} onValueChange={(value) => setFormData(prev => ({ ...prev, employees: value }))}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select number of employees" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10</SelectItem>
                <SelectItem value="11-50">11-50</SelectItem>
                <SelectItem value="51-200">51-200</SelectItem>
                <SelectItem value="201-500">201-500</SelectItem>
                <SelectItem value="501+">501+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>
        <p className="text-gray-600 mb-2">Email: support@claro.com</p>
        <p className="text-gray-600 mb-2">Phone: +1 (555) 123-4567</p>
        <p className="text-gray-600">Address: 123 Mental Health St, Wellness City, WC 12345</p>
      </div>
    </div>
  )
}