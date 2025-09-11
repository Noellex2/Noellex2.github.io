// Footer.js
import React from "react";
import "./Foot.css";

function Foot() {
  return (
    <footer className="foot">
      <div className="foot-container">

        {/* โลโก้ + ชื่อร้าน */}
        <div className="footer-brand">
          <h3>Little Moon</h3>
          <p>ร้านอาหารและของหวาน</p>
        </div>

        {/* เมนูลิงก์ */}
        <div className="footer-links">
          <h4>เมนู</h4>
          <ul>
            <li><a href="/">หน้าแรก</a></li>
            <li><a href="/food">อาหาร</a></li>
            <li><a href="/drink">เครื่องดื่ม</a></li>
            <li><a href="/snacks">ขนม</a></li>
          </ul>
        </div>

        {/* ข้อมูลติดต่อ */}
        <div className="foot-contact">
          <h4>ติดต่อเรา</h4>
          <p>📍 63/8 อ.บึงสามพัน ต.บึงสามพัน จ.เพชรบูรณ์</p>
          <p>📞 095-2019487</p>
          <p>Facebook : Little Moon</p>
        </div>

        {/* เวลาทำการ */}
        <div className="foot-hours">
          <h4>เวลาทำการ</h4>
          <p>เปิดทุกวัน</p>
          <p>08:00 - 19:00 น.</p>
        </div>
      </div>

      <div className="foot-bottom">
        <p>© 2025 Little Moon | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Foot;