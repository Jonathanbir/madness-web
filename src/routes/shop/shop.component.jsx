import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { scrollToOffset } from "../../utils/helper";
import { CategoriesProvider } from "../../contexts/categories.context";
import ShopNavigation from "../../components/shop-navegation/shop-navigation.component";
import Category from "../category/category.component";
import Footer from "../../components/footer/footer.component";
import "./shop.styles.scss";
const Shop = () => {
  useEffect(() => {
    scrollToOffset(0);
  }, []);
  return (
    <CategoriesProvider>
      <Routes>
        <Route path="/" element={<ShopNavigation />}>
          <Route path=":category" element={<Category />} />
        </Route>
      </Routes>
      <Footer />
      <div className="scroll-to-top" onClick={() => scrollToOffset(0)} />
    </CategoriesProvider>
  );
};

export default Shop;
