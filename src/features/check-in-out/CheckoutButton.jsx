import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import UseCheckout from "./UseCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = UseCheckout();
  return (
    <Button
      onClick={() => checkout(bookingId)}
      variation="primary"
      size="small"
      disabled={isCheckingOut}
    >
      {isCheckingOut ? <SpinnerMini /> : "Check out"}
    </Button>
  );
}

export default CheckoutButton;
