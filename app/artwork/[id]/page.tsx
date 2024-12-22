import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const artworks = {
  '1': { id: '1', title: "Sunset Dreams", image: "/placeholder.svg?height=800&width=600", category: "Watercolor", description: "A vibrant watercolor painting capturing the essence of a beautiful sunset." },
  '2': { id: '2', title: "Urban Sketch", image: "/placeholder.svg?height=800&width=600", category: "Pencil Sketch", description: "A detailed pencil sketch showcasing the bustling life of a city street." },
  // ... add more artworks here
}

export default function Artwork({ params }: { params: { id: string } }) {
  const artwork = artworks[params.id as keyof typeof artworks]

  if (!artwork) {
    return <div>Artwork not found</div>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-w-4 aspect-h-3 w-full overflow-hidden rounded-lg">
              <Image
                src={artwork.image}
                alt={artwork.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4">{artwork.title}</h1>
              <p className="text-lg text-gray-600 mb-4">{artwork.category}</p>
              <p className="mb-8">{artwork.description}</p>
              <Button>Inquire About This Artwork</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

