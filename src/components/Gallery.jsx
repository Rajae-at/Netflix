const Gallery = (props) => {
  //   const arrayImages = movieCategorie.images.map((images) => {});
  console.log(props.images);

  return (
    <div className="gallery">
      {props.images.map((images) => {
        return <img src={images} alt={"img de netflix"} />;
      })}
    </div>
  );
};

export default Gallery;
