import { Link } from "react-router-dom";
import "../sass/pages/payment.css";
const PaymentSuccess = () => {
  return (
    <div className="payment-page">
      <h1 className="roboto-black">Payment Successful</h1>
      <p className="roboto-medium">
        Thank you for your purchase. Your order will be processed shortly.
      </p>
      <Link to="/" className="roboto-black-italic send-data">
        Return to Home Page
      </Link>
    </div>
  );
};

export default PaymentSuccess;
