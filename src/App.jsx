//import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path='/' element={<ItemListContainer />} />
                    <Route exact path='/category/:id' element={<ItemListContainer />} />
                    <Route exact path='/item/id' element={<ItemDetailContainer />} />
                </Routes>
            </BrowserRouter>



        </>
    )
}

export default App





