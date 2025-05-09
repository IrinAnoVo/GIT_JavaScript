import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import products from '../products.json';

const ProductContext = createContext();
const ProductContextActions = createContext();

// Количество продуктов (можно изменить до 1000)
const initialProducts = products.slice(0, 6);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  // Изменение количества продукта == с мемоиз..
  const changeQuantity = useCallback((id, amount) => {
    setProducts(function(prevProducts) {
      return prevProducts.map(product =>
        product.id === id ?
          { ...product, quantity: Math.max(1, product.quantity + amount) } :
          product
      )}
    );
  }, []);

  // Изменение цены продукта  == с мемоиз..
  const changePrice = useCallback((id, amount) => {
    setProducts(function(prevProducts) {
      return prevProducts.map(product =>
        product.id === id ?
          { ...product, price: Math.max(1, product.price + amount) } :
          product
      )}
    );
  }, []);

  // Сортировка продуктов по критериям  == с мемоиз..
  const sortProducts = useCallback((criteria) => {
    setProducts(function(prevProducts) {
    const sortedProducts = [...prevProducts];

    switch (criteria) {
      case 'name':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'quantity':
        sortedProducts.sort((a, b) => a.quantity - b.quantity);
        break;
      default:
        break;
      }

      return sortedProducts;
    })
  }, []);

  // Вычисление статистики ==  с мемоиз..
  const statistics = useMemo (() => {
    const totalProducts = products.reduce((sum, product) => sum + product.quantity, 0);
    const totalBeforeDiscount = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    const totalDiscounts = products.reduce((sum, product) => sum + (product.price * product.quantity * product.discount / 100), 0);
    const finalTotal = totalBeforeDiscount - totalDiscounts;
    const averagePrice = totalProducts > 0 ? totalBeforeDiscount / totalProducts : 0;   //чтобы избежать деления на ноль

    return {
      totalProducts,
      totalBeforeDiscount,
      totalDiscounts,
      finalTotal,
      averagePrice
    };
  }, [products]);   //зависимость

const state = useMemo(() => ({
  products,
  statistics  //уже вычислели значение statistics
}), [products, statistics])

const actions = useMemo(() => ({
  changePrice, changeQuantity, sortProducts
}), [changePrice, changeQuantity, sortProducts])


  return (
    <ProductContext.Provider value={state}>
      <ProductContextActions.Provider value={actions}>
        {children}
      </ProductContextActions.Provider>
    </ProductContext.Provider>
  );
};

// Хук для использования контекста
// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProductActions = () => {
  const context = useContext(ProductContextActions);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
}