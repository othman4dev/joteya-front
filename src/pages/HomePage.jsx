import Header from "../components/Header";
import Categories from "../components/Home/Categories";
import Filter from "../components/Home/includes/Filter";
import Products from "../components/Home/Products";
import Sorter from "../components/Home/Sorter";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="main-home">
        <div className="main-products">
          <Categories />
          <Sorter />
          <Products />
        </div>
        <div className="aside-sect">
          <Filter />
        </div>
      </div>
    </>
  );
};
export default HomePage;
