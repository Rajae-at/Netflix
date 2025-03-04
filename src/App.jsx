import data from "./assets/data.json";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container">
      {/* <header>
        <img
          src="https://lereacteur-react-netflix.netlify.app/assets/logo-a79c3484.png"
          alt="logo netflix"
        />
      </header> */}
      <Header />
      <div className="gal">
        {data.map((movieCategorie) => {
          return (
            <div>
              <h2> {movieCategorie.category} </h2>
              {/* le but ici est de parcourir le tableau movieCategorie.images */}
              {/* et pour chaque élément de ce tableau je veux return <img/> */}
              {/* ici */}
              <div className="gallery">
                {movieCategorie.images.map((images) => {
                  return <img src={images} alt={"img de netflix"} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
