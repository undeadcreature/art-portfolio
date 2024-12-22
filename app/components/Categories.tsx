import Link from 'next/link'
import { Button } from "@/components/ui/button"

const categories = [
  "Color Pencil Works",
  "Pen Arts",
  "Pencil Sketch",
  "Watercolor Works"
]

export default function Categories() {
  return (
    <section id="categories" className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Art Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <Button asChild>
                <Link href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                  View All
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

