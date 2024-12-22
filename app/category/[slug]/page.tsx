import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ArtworkGrid from '../../components/ArtworkGrid'

const artworks = {
  'color-pencil-works': [
    { id: 'cp1', title: "Vibrant Nature", image: "/placeholder.svg?height=600&width=600", category: "Color Pencil" },
    { id: 'cp2', title: "Forest Whispers", image: "/placeholder.svg?height=600&width=600", category: "Color Pencil" },
    { id: 'cp3', title: "Autumn Leaves", image: "/placeholder.svg?height=600&width=600", category: "Color Pencil" },
    { id: 'cp4', title: "Fruit Still Life", image: "/placeholder.svg?height=600&width=600", category: "Color Pencil" },
    { id: 'cp5', title: "Animal Portrait", image: "/placeholder.svg?height=600&width=600", category: "Color Pencil" },
  ],
  'pen-arts': [
    { id: 'pa1', title: "Abstract Thoughts", image: "/placeholder.svg?height=600&width=600", category: "Pen Art" },
    { id: 'pa2', title: "City Life", image: "/placeholder.svg?height=600&width=600", category: "Pen Art" },
    { id: 'pa3', title: "Geometric Patterns", image: "/placeholder.svg?height=600&width=600", category: "Pen Art" },
    { id: 'pa4', title: "Intricate Mandala", image: "/placeholder.svg?height=600&width=600", category: "Pen Art" },
    { id: 'pa5', title: "Floral Design", image: "/placeholder.svg?height=600&width=600", category: "Pen Art" },
  ],
  'pencil-sketch': [
    { id: 'ps1', title: "Urban Sketch", image: "/placeholder.svg?height=600&width=600", category: "Pencil Sketch" },
    { id: 'ps2', title: "Portrait Study", image: "/placeholder.svg?height=600&width=600", category: "Pencil Sketch" },
    { id: 'ps3', title: "Landscape Drawing", image: "/placeholder.svg?height=600&width=600", category: "Pencil Sketch" },
    { id: 'ps4', title: "Still Life Composition", image: "/placeholder.svg?height=600&width=600", category: "Pencil Sketch" },
    { id: 'ps5', title: "Architectural Sketch", image: "/placeholder.svg?height=600&width=600", category: "Pencil Sketch" },
  ],
  'watercolor-works': [
    { id: 'wc1', title: "Sunset Dreams", image: "/placeholder.svg?height=600&width=600", category: "Watercolor" },
    { id: 'wc2', title: "Serenity", image: "/placeholder.svg?height=600&width=600", category: "Watercolor" },
    { id: 'wc3', title: "Ocean Breeze", image: "/placeholder.svg?height=600&width=600", category: "Watercolor" },
    { id: 'wc4', title: "Misty Mountains", image: "/placeholder.svg?height=600&width=600", category: "Watercolor" },
    { id: 'wc5', title: "Floral Bouquet", image: "/placeholder.svg?height=600&width=600", category: "Watercolor" },
  ],
}

export default function Category({ params }: { params: { slug: string } }) {
  const category = params.slug.replace(/-/g, ' ')
  const categoryArtworks = artworks[params.slug as keyof typeof artworks] || []

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center capitalize">{category}</h1>
          <ArtworkGrid artworks={categoryArtworks} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

