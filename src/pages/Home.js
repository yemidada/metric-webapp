import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../redux/categories/categoriesSlice";
import Title from "../components/Title";
import Item from "../components/Item";
import Feature from "../components/Feature";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const { categories, loading } = useSelector((state) => state.categories);
  if (loading)
    return (
      <div className="position-relative">
          <div className="position-absolute top-50 start-50 translate-middle">
            <p>Loading...</p>
        </div>
      </div>
    );
  return (
    <>
      {categories.length > 0 && (
        <Link to="/details" state={{ data: categories[0] }}>
          <Feature item={categories[0]} className="feature" />
        </Link>
      )}

      <Title title="STAT BY HAIR STYLES" />

      <div className="container-fluid">
        <div className="row">
          {categories.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;