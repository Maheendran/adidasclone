import React from 'react'
import {Route,Routes} from "react-router-dom"
import { Home } from '../pages/Home/Home'
import { Mens } from '../pages/Mens/Mens'
import { Women } from '../pages/Women/Women'
import { Kids } from '../pages/Kids/Kids'
import { Cart } from '../pages/Cart/Cart'
import { Singlepage } from '../pages/Singlepage/Singlepage'
import { Login } from '../Login/Login'
import { Signup } from '../Signup/Signup'


export const Routing = ({cartitems,handleAddproduct,handleRemoveproduct,handlecartRemoveproduct}) => {

  return (
  
    <Routes>

    <Route  path='/' element={<Home/>}  />
  <Route  path='/Mens' element={<Mens  handleAddproduct={handleAddproduct}/>} />
    <Route  path='/Women' element={<Women  handleAddproduct={handleAddproduct}/>} />
    <Route  path='/Kids' element={<Kids  handleAddproduct={handleAddproduct}/>} />
    <Route  path='/Cart' element={<Cart  cartitems={cartitems}handleAddproduct={handleAddproduct} handleRemoveproduct={handleRemoveproduct} handlecartRemoveproduct={handlecartRemoveproduct}/>}/>
    <Route  path='/detailpage/:cart_id' element={<Singlepage handleAddproduct={handleAddproduct}/>}/>
    <Route  path='/login' element={<Login/> }/>
    <Route  path='/signup' element={<Signup/> }/>
     </Routes>
  )
}
