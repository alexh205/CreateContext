import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext.js";

const Detail = () => {
  // const { horoscopesObj } = useContext(HoroscopeContext);
  const { sign } = useContext(HoroscopeContext);
  return (
    <div className="details">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"
        alt=""
      />
      <h2 vlaue={sign.name}>{sign.name}</h2>
      <h4 value={sign.element}>Element: {sign.element}</h4>
      <h4 value={sign.traits}>Traits: {sign.traits}</h4>
    </div>
  );
};

export default Detail;
