import React from "react";

function Content({ loggedIn, handleFontSizeIncrease, fontSize }) {
  return (
 
    loggedIn
    &&
    <div>
    <button onClick={handleFontSizeIncrease}>Increase Font Size</button>
   <p style={{ fontSize: fontSize }}>CONTENT</p>
      </div>
  )
}

export default Content;
