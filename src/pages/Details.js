import { useLocation } from "react-router-dom";
import Feature from "../components/Feature";
import Title from "../components/Title";
import Details from "../components/Details";

const Home = () => {
  const location = useLocation();
  const data = location.state?.data;
  return (
    <>
      <Feature item={data} className="feature"/>
      <Title title="DETAIL OF HAIRSTYLE" />
      <Details title="Name" answer={data && data.name ? data.name : ''} />
      <Details title="Owner" answer={data && data.owned ? data.owned : ''}  />
      <Details title="Patch" answer={data && data.patch ? data.patch : ''}  />

    </>
  )};
  export default Home;