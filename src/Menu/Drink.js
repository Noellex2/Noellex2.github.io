// Drink.js
import React from 'react';
import './Drink.css';

function Drink() {
  const drinks = [
    { id: 1, name: "ชาเขียวเย็น", image: "/imgdri/1.jpg" },
    { id: 2, name: "ชานมไข่มุก", image: "/imgdri/2.jpg" },
    { id: 3, name: "ชาร้อน", image: "/imgdri/3.jpg" },
    { id: 4, name: "ชาเบอรี่", image: "/imgdri/4.jpg" },
    { id: 6, name: "นมสด", image: "/imgdri/6.jpg" },
    { id: 7, name: "โกโก้ร้อน", image: "/imgdri/7.jpg" },
    { id: 8, name: "ลาเต้ร้อน", image: "/imgdri/8.jpg" },
    { id: 9, name: "ชามะนาว", image: "/imgdri/9.jpg" },
    { id: 10, name: "ชาเขียวร้อน", image: "/imgdri/10.jpg" },
    { id: 11, name: "ชาดอกไม้บาน", image: "/imgdri/11.jpg" },
    { id: 12, name: "ชาอบเชย", image: "/imgdri/12.jpg" },
  ];

  return (
    <div className="drink-page">
      <h2>เครื่องดื่ม</h2>
      <div className="drink-grid">
        {drinks.map(drink => (
          <div key={drink.id} className="drink-card">
            <img src={drink.image} alt={drink.name} />
            <p>{drink.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Drink;
