import React, { useState, useEffect } from "react";

const ImageCard = (props) => {
  const [spans, setSpans] = useState();
  const imageRef = React.createRef();

  useEffect(() => {
    imageRef.current.addEventListener("load", setspans);
  });

  const setspans = () => {
    const height = imageRef.current.clientHeight;

    const span = Math.ceil(height / 10);

    setSpans(span);
  };

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img
        ref={imageRef}
        alt={props.image.description}
        src={props.image.urls.regular}
      />
    </div>
  );
};

export default ImageCard;
