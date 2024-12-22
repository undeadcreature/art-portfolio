import Header from './components/Header'
import Introduction from './components/Introduction'
import ArtworkGrid from './components/ArtworkGrid'
import Categories from './components/Categories'
import Contact from './components/Contact'
import Footer from './components/Footer'

const featuredArtworks = [
  { id: '1', title: "Sunset Dreams", image: "/placeholder.svg?height=600&width=600", category: "Watercolor" },
  { id: '2', title: "Urban Sketch", image: "/placeholder.svg?height=600&width=600", category: "Pencil Sketch" },
  { id: '3', title: "Vibrant Nature", image: "/placeholder.svg?height=600&width=600", category: "Color Pencil" },
  { id: '4', title: "Abstract Thoughts", image: "/placeholder.svg?height=600&width=600", category: "Pen Art" },
  { id: '5', title: "Serenity", image: "/placeholder.svg?height=600&width=600", category: "Watercolor" },
  { id: '6', title: "City Life", image: "/placeholder.svg?height=600&width=600", category: "Pen Art" },
  { id: '7', title: "Forest Whispers", image: "/placeholder.svg?height=600&width=600", category: "Color Pencil" },
  { id: '8', title: "Portrait Study", image: "/placeholder.svg?height=600&width=600", category: "Pencil Sketch" },
  { id: '9', title: "Ocean Breeze", image: "/placeholder.svg?height=600&width=600", category: "Watercolor" },
  { id: '10', title: "Geometric Patterns", image: "/placeholder.svg?height=600&width=600", category: "Pen Art" },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Introduction />
        <section id="featured" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Artworks</h2>
            <ArtworkGrid artworks={featuredArtworks} />
          </div>
        </section>
        <Categories />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

