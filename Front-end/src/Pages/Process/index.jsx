import PageSection from "../../Components/PageSection";
import CheckoutCart from "./Checkout/CheckoutCart";
import ProcessItems from "./ProcessItems/ProcessItems";

export default function index() {
  return (
    <PageSection>
      <ProcessItems />

      <CheckoutCart />
    </PageSection>
  );
}
