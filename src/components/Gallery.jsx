import data from "./assets/data.json";
const Gallery = (props) => {
  const arrayImages = movieCategorie.images.map((images) => {});

  return (
    <div className="gallery">
      {movieCategorie.images.map((images) => {
        return <img src={images} alt={"img de netflix"} />;
      })}
    </div>
  );
};

export default Gallery;
