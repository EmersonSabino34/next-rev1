'use client";'

import { ProductButton } from "./productButton";

export default function ProductsPage() {
  return (
    <div>
      <h1>Products Page</h1>
      <ProductButton label="Buy Now" icon={<span>🛒</span>} />
      <p>Welcome to the products page. Here you can find a variety of products.</p>
    </div>
    
  );
}