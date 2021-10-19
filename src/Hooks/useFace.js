import { useEffect, useState } from "react";

const useFace = () => {
  const [Ourfaces, setOurfaces] = useState([]);
  useEffect(() => {
    fetch("/face.json")
      .then((res) => res.json())
      .then((data) => setOurfaces(data))
      .catch((error) => console.log(error));
  }, []);

  return [Ourfaces];
};

export default useFace;
