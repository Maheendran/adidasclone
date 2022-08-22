
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Routing } from './AllRoutes/Routing';
import { Footer } from './components/Footer/Footer';
import { useEffect, useState } from 'react';
const localstorages = JSON.parse(localStorage.getItem("newcart") || "[]")



function App() {
  const [cart,setCart] = useState(localstorages)

  useEffect(()=>{
    localStorage.setItem("newcart",JSON.stringify(cart));
  },[cart])

  const handleAddproduct = (product) => {
     console.log("hai")
      const productExist = cart.find((items)=> items.id === product.id);
      if(productExist){
        setCart(cart.map((items)=>items.id === product.id ?
        {...productExist,quantity : productExist.quantity + 1}:items))
      }
      else{
        setCart([...cart,{...product,quantity:1}])
      }
  }
// ..................
 const handleRemoveproduct = (product)=>{
    const productExist = cart.find((items)=> items.id === product.id);
    if(productExist.quantity === 1){
      setCart(cart.filter((items)=>items.id !== product.id));
    }
    else{
      setCart(
        cart.map((items)=>items.id === product.id ?
        {...productExist,quantity : productExist.quantity - 1}:items))
    }
  }
  ////////////////////////////////////
  const handlecartRemoveproduct = (product)=>{
    const productExist = cart.find((items)=> items.id === product.id);
    if(productExist.quantity ){
      setCart(cart.filter((items)=>items.id !== product.id));
    }
    else{
      setCart(
        cart.map((items)=>items.id === product.id ?
        {...productExist,quantity : productExist.quantity - 1}:items))
    }
  }
  return (
    <div className="App">

<Navbar  cartitems={cart}/>
    <Routing  cartitems={cart} handleAddproduct={handleAddproduct}handleRemoveproduct={handleRemoveproduct} handlecartRemoveproduct={handlecartRemoveproduct} />
<Footer/>
    </div>
  );
}

export default App;
