import './BurgerButton.css';


function BurgerButton  (props) {
  return ( 
      <div className={(props.clicked) ? "burger-cross" : "burger-strings"} onClick={props.onClick}>
          <span></span>
      </div>
  );
};

export default BurgerButton;