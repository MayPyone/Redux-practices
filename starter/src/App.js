import Navbar from './component/Navbar'
import CartContainer from './component/CartContainer';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import  Modal  from './component/Modal'
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return <main>
      {isOpen && <Modal />}
    <Navbar />
  <CartContainer />
  </main>;
}
export default App;
