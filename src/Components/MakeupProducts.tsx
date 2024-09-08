import { useState } from 'react';
import '../styles/MakeupProducts.css';
import { Product } from '../Models/Product';
import Lipstick from '../Images/Lipstick.jpg';
import Foundation from '../Images/Foundation.jpg';
import Eye_Shadow from '../Images/Eye_Shadow.jpg';

export const MakeupProducts = () => {
    const allProducts: Product[] = [
        { id: 1, name: 'Lipstick A', description: 'Long-lasting lipstick.', price: 20, category: 'lipstick', images: [Lipstick] },
        { id: 2, name: 'Foundation B', description: 'Full coverage foundation.', price: 35, category: 'foundation', images: [Foundation] },
        { id: 3, name: 'Eye Shadow C', description: 'Vibrant eye shadow palette.', price: 25, category: 'eyeshadow', images: [Eye_Shadow] },
   
      ];
      const [selectedCategory, setSelectedCategory] = useState<string>('all');
      const [products] = useState<Product[]>(allProducts);
    
      const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);
    
  return (
    <>
   
   <div className="makeup-products-container">
      <h1>Makeup Products</h1>
      <div className="filter-section">
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="filter-select"
        >
          <option value="all">All</option>
          <option value="lipstick">Lipsticks</option>
          <option value="foundation">Foundations</option>
          <option value="eyeshadow">Eye Shadows</option>
        </select>
      </div>
      <div className="products-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <div className="product-images">
              {product.images.map((image, index) => (
                <img key={index} src={image} alt={product.name} className="product-image" />
              ))}
            </div>
            <p>{product.description}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
