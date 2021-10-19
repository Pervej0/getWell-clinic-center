import { useState, useEffect } from "react";

const useBlog = () => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setblogs(data))
      .catch((error) => console.log(error));
  }, []);

  return [blogs];
};

export default useBlog;
