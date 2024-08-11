import { Link } from "react-router-dom";
import "../sass/pages/payment.css";
function PaymentFailed() {
  return (
    <div className="payment-page">
      <h1 className="roboto-black">Payment Failed</h1>
      <p className="roboto-medium">
        Unfortunately, your payment has been declined. Please try again or
        contact our customer support.
      </p>
      <Link to="/" className="roboto-black-italic send-data">
        Return to Home Page
      </Link>
    </div>
  );
}

export default PaymentFailed;
