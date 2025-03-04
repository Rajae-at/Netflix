import data from "./assets/data.json";

const Title = () => {
  return (
    {data.map((movieCategorie) => {
        return (
          <div>
            <h2> {movieCategorie.category} </h2>
  )};
};
export default Title;
