'use client'

import { useState } from 'react'
import { useActionState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitCommission } from '../actions/submitCommission'

export default function Commissions() {
  const [state, formAction] = useActionState(submitCommission, null)
  const [commissionType, setCommissionType] = useState<string>('')
  const [artworkStyle, setArtworkStyle] = useState<string>('')

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Commission Artwork</h1>
          <p className="mb-8 text-center">Fill out the form below to request a commission or purchase existing artwork.</p>
          <form action={formAction} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input type="text" id="name" name="name" required />
              {state?.errors?.name && <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input type="email" id="email" name="email" required />
              {state?.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>}
            </div>
            <div>
              <label htmlFor="commissionType" className="block text-sm font-medium text-gray-700">Commission Type</label>
              <Select name="commissionType" value={commissionType} onValueChange={setCommissionType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select commission type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New Commission</SelectItem>
                  <SelectItem value="existing">Purchase Existing Artwork</SelectItem>
                </SelectContent>
              </Select>
              {state?.errors?.commissionType && <p className="text-red-500 text-sm mt-1">{state.errors.commissionType[0]}</p>}
            </div>
            <div>
              <label htmlFor="artworkStyle" className="block text-sm font-medium text-gray-700">Artwork Style</label>
              <Select name="artworkStyle" value={artworkStyle} onValueChange={setArtworkStyle}>
                <SelectTrigger>
                  <SelectValue placeholder="Select artwork style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="colorpencil">Color Pencil</SelectItem>
                  <SelectItem value="penart">Pen Art</SelectItem>
                  <SelectItem value="pencilsketch">Pencil Sketch</SelectItem>
                  <SelectItem value="watercolor">Watercolor</SelectItem>
                </SelectContent>
              </Select>
              {state?.errors?.artworkStyle && <p className="text-red-500 text-sm mt-1">{state.errors.artworkStyle[0]}</p>}
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <Textarea id="description" name="description" placeholder="Describe your commission request or the artwork you're interested in purchasing" required />
              {state?.errors?.description && <p className="text-red-500 text-sm mt-1">{state.errors.description[0]}</p>}
            </div>
            <Button type="submit" className="w-full">Submit Request</Button>
          </form>
          {state?.success && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
              {state.message}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

