import { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './componet/Sidebar';

function App() {
  let [mahsulot, setMahsulotlar]= useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setMahsulotlar(data.products));

  }, [])



  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <nav>
          <h1 className="sidebar-title">Logo</h1>
          <div className="search-box">
            <input type="text" placeholder="" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <ul>
            <li>Status</li>
            <li>Price</li>
            <li>Collections</li>
            <li>Chains</li>
            <li>Categories</li>
          </ul>
          <div className="ii">
            <i class="fa-solid fa-bell"></i>
            <i class="fa-solid fa-message"></i>
            <button className='btn'>Wallet</button>
            <i class="fa-solid fa-sort-down"></i>
            <img src="c.png" alt="eef" />
          </div>
        </nav>
        <div className="sels">
          <p>571,632 items</p>
          <select className='sel' name="" id="">
            <option value="">All Items</option>
          </select>
          <select className='sel' name="" id="">
            <option value="">Sort By</option>
          </select>
        </div>
        <div className="cards">
          {mahsulot.map((m, i) => {
            return (
              <div className="card">
                <img src={m.images[0]} alt="sd" />
                <div className="dis">
                  <h4>Categories:{m.category}</h4>
                  <h3>Rating:{m.rating}</h3>
                </div>
                <div className="dis">
                  <h4>{m.title}</h4>
                  <h4>Price:{m.price}</h4>
                </div>
                <div className="dis">
                  <i class="fa-solid fa-heart"></i>
                  <button className='btn2'>Buy Now</button>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </div>
  );
}

export default App;


