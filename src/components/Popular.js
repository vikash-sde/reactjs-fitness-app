import { useEffect } from "react";

const Popular = () => {
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    console.log(data);
  };

  useEffect(() => {
getPopular()
  }, [])
    console.log(process.env.REACT_APP_API_KEY);
  

  return <div>Popular</div>;
};

export default Popular;
