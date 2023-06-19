import "./button.css"
import {useState} from "react"

export default function Button({
  color,
  children,
  onClick,
  className = "btn",
}) {
  const [colorBtn, setColorBtn] = useState(color);

  const styleBtn = {
    backgroundColor: colorBtn,
  };

  function handleClick() {
    onClick();
  }

  return (
    <button className={className} onClick={handleClick} style={styleBtn}>
      {children}
    </button>
  );
}