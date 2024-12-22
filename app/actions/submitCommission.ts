'use server'

import { z } from 'zod'

const CommissionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  commissionType: z.enum(["new", "existing"]),
  artworkStyle: z.enum(["colorpencil", "penart", "pencilsketch", "watercolor"]),
  description: z.string().min(10, "Description must be at least 10 characters long"),
})

export async function submitCommission(formData: FormData) {
  const validatedFields = CommissionSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    commissionType: formData.get('commissionType'),
    artworkStyle: formData.get('artworkStyle'),
    description: formData.get('description'),
  })

  if (!validatedFields.success) {
    return { success: false, errors: validatedFields.error.flatten().fieldErrors }
  }

  // Here you would typically save the data to a database
  // For this example, we'll just log it and return a success message
  console.log('Commission request received:', validatedFields.data)

  // Simulate a delay to mimic server processing time
  await new Promise(resolve => setTimeout(resolve, 1000))

  return { success: true, message: "Your commission request has been submitted successfully!" }
}

