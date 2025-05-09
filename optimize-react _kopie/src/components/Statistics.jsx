import React from 'react'
import { useProducts } from '../context/ProductProvider';

export default function Statistics() {
  const { statistics } = useProducts();     //же получаем вычисление, переписываем все stats на statistics 
  console.log("Statistics rendering");


  return (
    <div className="mb-8 p-6 border rounded-lg bg-blue-50 shadow-sm">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Статистика продуктов</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="p-3 bg-white rounded shadow-sm">
          <div className="text-sm text-gray-500">Количество продуктов</div>
          <div className="text-2xl font-bold">{statistics.totalProducts}</div>
        </div>
        <div className="p-3 bg-white rounded shadow-sm">
          <div className="text-sm text-gray-500">Общая стоимость</div>
          <div className="text-2xl font-bold">${statistics.totalBeforeDiscount.toFixed(2)}</div>
        </div>
        <div className="p-3 bg-white rounded shadow-sm">
          <div className="text-sm text-gray-500">Общая скидка</div>
          <div className="text-2xl font-bold text-red-500">-${statistics.totalDiscounts.toFixed(2)}</div>
        </div>
        <div className="p-3 bg-white rounded shadow-sm">
          <div className="text-sm text-gray-500">Итоговая стоимость</div>
          <div className="text-2xl font-bold text-green-600">${statistics.finalTotal.toFixed(2)}</div>
        </div>
        <div className="p-3 bg-white rounded shadow-sm">
          <div className="text-sm text-gray-500">Средняя цена</div>
          <div className="text-2xl font-bold">${statistics.averagePrice.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};
