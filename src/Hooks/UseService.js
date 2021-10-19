import { useEffect, useState } from "react";

const useService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.log(error));
  }, []);

  return [services];
};

export default useService;
