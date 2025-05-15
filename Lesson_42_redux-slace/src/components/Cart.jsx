import { getCartItems, removeProductFromCart } from '../store/cart.slice';
import { useDispatch, useSelector } from 'react-redux';
 
export default function Cart() {
  const items = useSelector(getCartItems);
  const dispatch = useDispatch();
 
  return (
    <div className="mb-8 p-6 border rounded-lg bg-blue-50 shadow-sm">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Корзина</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {items.map(item => (
          <div key={item.id} className="p-3 bg-white rounded shadow-sm">
            <div className="text-sm text-gray-500">{item.name}</div>
             <div className="text-2xl font-bold">${item.price}</div>
            <div className="text-2xl font-bold">Колечество {item.count}</div>
            <button className='px-2 py-1 bg-blue-200 rounded-l' onClick={() => {
              dispatch(removeProductFromCart({ id: item.id }))
            }}>Удалить из корзины</button>
          </div>
        ))}
      </div>
    </div>
  )
}  
