import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Body from "../com/Body";
import ImgSild from "../com/ImgSlid";

function Home() {
  // 🥘 ข้อมูลเมนูแบ่งตามหมวด
  const categories = {
    food: [
    { id: 1, name: "เทมปุระ", image: "/img/10.jpg" },
    { id: 1, name: "สปาเกตตี้", image: "/img/11.jpg" },
    { id: 1, name: "พิซซ่า", image: "/img/12.jpg" },
    { id: 1, name: "หมูทอด", image: "/img/13.jpg" },
    { id: 1, name: "ราเมน", image: "/img/14.jpg" },
    ],
    drink: [
    { id: 8, name: "ลาเต้ร้อน", image: "/imgdri/8.jpg" },
    { id: 9, name: "ชามะนาว", image: "/imgdri/9.jpg" },
    { id: 10, name: "ชาเขียวร้อน", image: "/imgdri/10.jpg" },
    { id: 11, name: "ชาดอกไม้บาน", image: "/imgdri/11.jpg" },
    { id: 12, name: "ชาอบเชย", image: "/imgdri/12.jpg" },
    ],
    snacks: [
    { id: 1, name: "ชิโอะปัง", image: "/imgsn/001.jpg" },
    { id: 1, name: "ขนมปังหน้าครีมชีสส้ม", image: "/imgsn/002.jpg" },
    { id: 1, name: "ชีสเค้ก", image: "/imgsn/003.png" },
    { id: 1, name: "เค้กส้มครีมชีส", image: "/imgsn/004.jpg" },
    { id: 1, name: "ครัวซอง", image: "/imgsn/005.jpg" },

    ],
  };

  // กำหนดชื่อแสดงผลสำหรับแต่ละ key
  const categoryNames = {
    food: "อาหาร",
    drink: "เครื่องดื่ม",
    snacks: "ขนม",
  };

  return (
  <div className="home">
    <Body/>

    {Object.entries(categories).map(([key, items]) => (
      <div key={key} className="category-section">
        {/* ชื่อหมวด */}
        <h2 className="category-title">
          <Link to={`/${key}`} className="category-link">
            {categoryNames[key]}  {/* แสดงชื่อหมวด: อาหาร / เครื่องดื่ม / ขนม */}
          </Link>
        </h2>


          {/* การ์ดของแต่ละหมวด */}
          <div className="menu-container">
            {items.map((item) => (
              <div key={item.id} className="menu-card">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
          <ImgSild/>
    </div>
  );
}

export default Home;
