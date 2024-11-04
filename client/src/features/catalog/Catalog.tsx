import agent from '../../app/api/agent';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { Product } from '../../app/models/products';
import ProductList from './ProductList';
import { useState, useEffect } from 'react';

export default function Catalog() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.Catalog.list()
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingComponent message="Loading products..." />;

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
