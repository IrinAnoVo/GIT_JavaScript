import { getProducts } from '../store/products.slice';
import Product from './Product';
import { useSelector } from 'react-redux';

export default function ProductList() {
  const products = useSelector(getProducts);
  console.log("ProductList rendering");

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};