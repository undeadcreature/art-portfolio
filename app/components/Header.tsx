import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

export default function Header() {
  return (
    <header className="bg-background text-foreground shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-xl font-bold">My Art Portfolio</Link>
        <ul className="flex items-center space-x-4">
          <li><Link href="/#featured">Featured</Link></li>
          <li><Link href="/#categories">Categories</Link></li>
          <li><Link href="/commissions">Commissions</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
          <li><ThemeToggle /></li>
        </ul>
      </nav>
    </header>
  )
}

