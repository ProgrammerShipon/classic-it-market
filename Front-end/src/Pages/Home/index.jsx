import BestSelling from "./BestSellingProducts/BestSelling";
import BrowseByCategory from "./BrowseByCategory/BrowseByCategory";
import ExploreOurProducts from "./ExploreProducts/ExploreOurProducts";
import ExtraSection from "./ExtraSection/ExtraSection";
import FlashSales from "./FlashSales/FlashSales";
import NewArrival from "./NewArrival/NewArrival";

// Home Page
export default function index() {
  return (
    <>
      <FlashSales />
      <BrowseByCategory />
      <BestSelling />
      <ExploreOurProducts />
      <NewArrival />
      <ExtraSection />
    </>
  );
}
