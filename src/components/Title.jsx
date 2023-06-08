import React, { useEffect, useState } from "react";

const Title = ({ onTitle = "Easy-Peasy", children }) => {
  const [sample, setSample] = useState(onTitle);

  useEffect(() => {
    setSample(onTitle);
  }, [onTitle]);

  // Catch up title element.
  // console.log(document.getElementById("title"));
  document.getElementById("title").innerHTML = onTitle;

  return children;
};

export default Title;
