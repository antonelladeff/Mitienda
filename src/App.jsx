//import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path="/products" element={<ItemListContainer />} />
                    <Route exact path='/category/:id' element={<ItemListContainer />} />
                    <Route exact path='/item/:id' element={<ItemDetailContainer />} />
                    <Route exact path='/*' element={<NotFound />} />

                </Routes>
                <Footer />
            </BrowserRouter>



        </>
    )
}

export default App