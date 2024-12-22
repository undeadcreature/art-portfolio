import { Button } from "@/components/ui/button"

export default function Introduction() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm [Your Name]</h1>
        <p className="text-xl mb-8">An artist passionate about bringing imagination to life through various mediums</p>
        <Button asChild>
          <a href="/commissions">Commission Artwork</a>
        </Button>
      </div>
    </section>
  )
}

