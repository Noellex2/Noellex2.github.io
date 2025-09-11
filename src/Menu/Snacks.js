import React from 'react';
import { Link } from "react-router-dom";
import "./Snacks.css"


function Snacks() {
  const snacks = [
    { id: 1, name: "ชิโอะปัง", image: "/imgsn/001.jpg" },
    { id: 1, name: "ขนมปังหน้าครีมชีสส้ม", image: "/imgsn/002.jpg" },
    { id: 1, name: "ชีสเค้ก", image: "/imgsn/003.png" },
    { id: 1, name: "เค้กส้มครีมชีส", image: "/imgsn/004.jpg" },
    { id: 1, name: "ครัวซอง", image: "/imgsn/005.jpg" },
    { id: 1, name: "ชินามอนโรล", image: "/imgsn/006.jpg" },
    { id: 1, name: "ซอร์ฟคุกกี้เบอรี่", image: "/imgsn/007.jpg" },
    { id: 1, name: "ซอร์ฟคุกกี้", image: "/imgsn/008.jpg" },
    { id: 1, name: "ชูครีม", image: "/imgsn/009.jpg" },
    { id: 1, name: "มัฟฟิน", image: "/imgsn/0010.jpg" },
    { id: 1, name: "เค้กเลมอน", image: "/imgsn/0011.jpg" },
    { id: 1, name: "มาการอง", image: "/imgsn/0012.jpg" },
    { id: 1, name: "เมอแร็งก์", image: "/imgsn/0013.jpg" },
    { id: 1, name: "แพนเค้ก", image: "/imgsn/0014.jpg" },
    { id: 1, name: "คัพเค้ก", image: "/imgsn/0015.jpg" },

  ];

  return (
    <div className="nav-buttons.link">

      <div className="snacks-page">
      <h2>ขนม</h2>
      <div className="snacks-grid">
        {snacks.map(snacks => (
          <div key={snacks.id} className="snacks-card">
            <img src={snacks.image} alt={snacks.name} />
            <p>{snacks.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>

  );
}

export default Snacks;