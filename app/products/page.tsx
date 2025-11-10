// components/ProductCards.tsx
import React from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Smartphone X200",
    description: "Tela 6.5\", 128GB, câmera tripla de 48MP.",
    price: "$699",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Notebook UltraBook 14\"",
    description: "Intel i5, 16GB RAM, SSD 512GB.",
    price: "$1,099",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Fone Bluetooth Pro",
    description: "Som estéreo, cancelamento de ruído ativo.",
    price: "$129",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Smartwatch Fit 3",
    description: "Monitor de batimentos, GPS, resistência à água.",
    price: "$199",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Tablet Max 10\"",
    description: "Tela Full HD, 64GB armazenamento, suporte a caneta.",
    price: "$349",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Câmera DSLR Pro",
    description: "24MP, lente 18-55mm, gravação em 4K.",
    price: "$899",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Caixa de Som Bluetooth",
    description: "Som potente, bateria de 12h, à prova d'água.",
    price: "$79",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Monitor 27\" 4K",
    description: "Display Ultra HD, HDR10, taxa de 75Hz.",
    price: "$399",
    image: "https://via.placeholder.com/150",
  },
];

const ProductCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-xl shadow p-4 flex flex-col hover:shadow-lg transition-shadow"
        >
          <img
            src={product.image}
            alt={product.name}
            className="mb-4 rounded"
          />
          <h3 className="font-bold text-lg">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{product.description}</p>
          <span className="font-semibold text-blue-600">{product.price}</span>
          <button className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Adicionar ao carrinho
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
