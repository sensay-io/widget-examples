import Link from "next/link";
import { notFound } from "next/navigation";
import { getImage, getProduct } from "../data";
import Image from "next/image";
import ImageCredits from "../../../components/ImageCredits";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProduct(parseInt(id, 10));

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-4 py-8">
      <div>
        <Link
          href="/products"
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          ← Back to Products
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="h-[60vh] w-full relative rounded-lg overflow-hidden">
            <Image
              src={getImage(product.id)}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <ImageCredits />
        </div>

        <div className="p-4 flex flex-col gap-6">
          <div>
            <span className="text-xs font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

          <p>{product.description}</p>

          <p className="text-gray-500 border-t border-gray-200 pt-6">
            {product.content}
          </p>

          <div className="flex flex-col gap-2 border-t border-gray-200 pt-6">
            <h2 className="text-lg font-semibold text-gray-900">Features</h2>
            <div className="flex flex-col gap-2">
              {Object.entries(product.features).map(([key, value]) => (
                <div key={key} className="flex items-center gap-2">
                  <div className="text-gray-500 text-sm">{key}</div>
                  <div className="flex-1 h-4 bg-dots bg-repeat-x bg-center"></div>
                  <div className="text-gray-900 text-sm font-medium">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
