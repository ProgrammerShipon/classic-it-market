import BrowseByCategory from "./BrowseByCategory/BrowseByCategory";
import FlashSales from "./FlashSales/FlashSales";

// Home Page
export default function index() {
  return (
    <>
      <FlashSales />
      <BrowseByCategory />
    </>
  );
}
