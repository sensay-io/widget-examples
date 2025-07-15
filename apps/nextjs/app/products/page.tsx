import Image from "next/image";
import Section from "../../components/Section";
import { LinkButton } from "../../components/LinkButton";
import { getImage, PRODUCTS } from "./data";
import ImageCredits from "../../components/ImageCredits";


export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-6 py-8">
      <Section
        title="Discover our curated collection of premium products"
        description="Ask AI sales chatbot about anything regarding sales."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {PRODUCTS.map((product, index) => (
          <div
            key={product.id}
            className="flex gap-2 bg-white overflow-hidden rounded border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="min-w-32 flex-0 h-full bg-gray-200 flex items-center justify-center relative">
              <Image src={getImage(index)} alt={product.name} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-6 p-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm line-clamp-2">{product.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                  {product.category}
                </span>
                <LinkButton href={`/products/${product.id}`} className="border-0">
                View Details
              </LinkButton>
              </div>
              
            </div>
          </div>
        ))}
      </div>
      <ImageCredits />
    </div>
  );
}
