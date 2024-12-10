import Link from "next/link"
import Image from "next/image";
import { ChevronDown, Heart, Search, ShoppingCart } from 'lucide-react'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">

            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg"
                alt="Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            <div className="hidden md:flex relative flex-1 max-w-xl mx-4">
              <Input
                type="search"
                placeholder="Rechercher un produit"
                className="w-full pl-4 pr-10"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>

            <div className="flex items-center gap-4">
              <Link href="/inspirations" className="hidden md:block text-gray-600 hover:text-gray-900">
                Inspirations
              </Link>
              <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                <Heart className="h-5 w-5" />
                <span className="hidden md:inline">Mes favoris</span>
                <span className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">24</span>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600">
                <ShoppingCart className="h-5 w-5 md:mr-2" />
                <span className="hidden md:inline">Panier</span>
              </Button>
              <button className="flex items-center gap-1 text-gray-600">
                FR
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
