import React from 'react';
import { Link } from "react-router-dom";
import "./Food.css"


function Food() {
  const food = [
    { id: 1, name: "ตำถั่วฝักยาว", image: "/img/1.jpg" },
    { id: 1, name: "เฟรนฟราย", image: "/img/2.jpg" },
    { id: 1, name: "สเต๊ก", image: "/img/3.jpg" },
    { id: 1, name: "แซลมอนย่างซีอิ๊ว", image: "/img/5.jpg" },
    { id: 1, name: "กุ้งต้ม", image: "/img/6.jpg" },
    { id: 1, name: "เกี๊ยวซ่า", image: "/img/7.jpg" },
    { id: 1, name: "แกงเขียวหวาน", image: "/img/9.jpg" },
    { id: 1, name: "เทมปุระ", image: "/img/10.jpg" },
    { id: 1, name: "สปาเกตตี้", image: "/img/11.jpg" },
    { id: 1, name: "พิซซ่า", image: "/img/12.jpg" },
    { id: 1, name: "หมูทอด", image: "/img/13.jpg" },
    { id: 1, name: "ราเมน", image: "/img/14.jpg" },
    { id: 1, name: "ข้าวหน้าหมูแดง", image: "/img/15.jpg" },
    { id: 1, name: "ผัดผักบุ้งไฟแดง", image: "/img/16.jpg" },
    { id: 1, name: "ชูชิ", image: "/img/17.jpg" },
    { id: 1, name: "ต้มยำกุ้ง", image: "/img/18.jpg" },

  ];

  return (
    <div className="food-page">
      <h2>อาหาร</h2>
      <div className="food-grid">
        {food.map(food => (
          <div key={food.id} className="food-card">
            <img src={food.image} alt={food.name} />
            <p>{food.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;