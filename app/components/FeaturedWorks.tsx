import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const featuredWorks = [
  { title: "Artwork 1", image: "/placeholder.svg?height=400&width=300", category: "Watercolor" },
  { title: "Artwork 2", image: "/placeholder.svg?height=400&width=300", category: "Pencil Sketch" },
  { title: "Artwork 3", image: "/placeholder.svg?height=400&width=300", category: "Color Pencil" },
]

export default function FeaturedWorks() {
  return (
    <section id="featured" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorks.map((work, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <Image src={work.image} alt={work.title} width={300} height={400} className="w-full h-auto" />
                <div className="p-4">
                  <h3 className="font-semibold">{work.title}</h3>
                  <p className="text-sm text-gray-600">{work.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

