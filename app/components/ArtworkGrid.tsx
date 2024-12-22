import Image from 'next/image'
import Link from 'next/link'

interface Artwork {
  id: string;
  title: string;
  image: string;
  category: string;
}

interface ArtworkGridProps {
  artworks: Artwork[];
}

export default function ArtworkGrid({ artworks }: ArtworkGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {artworks.map((artwork) => (
        <Link key={artwork.id} href={`/artwork/${artwork.id}`} className="group">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-muted">
            <Image
              src={artwork.image}
              alt={artwork.title}
              layout="fill"
              objectFit="cover"
              className="group-hover:opacity-75 transition-opacity duration-300"
            />
          </div>
          <h3 className="mt-2 text-sm text-foreground">{artwork.title}</h3>
          <p className="text-xs text-muted-foreground">{artwork.category}</p>
        </Link>
      ))}
    </div>
  )
}

