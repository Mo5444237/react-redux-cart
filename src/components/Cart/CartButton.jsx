import classes from "./CartButton.module.css";

const CartButton = () => {
  const showCartHandler = () => {
    // click to show cart
  };
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
