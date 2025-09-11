import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);   // กลับไปบนสุดทุกครั้งที่เปลี่ยนหน้า
  }, [pathname]);

  return null;
}
