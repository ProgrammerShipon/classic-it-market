import { useState } from "react";
import PageSection from "../../../Components/PageSection";
import DetailsContent from "./DetailsContent";
import PreviewImages from "./previewImages";

const demData = {
  _id: 1,
  title: "Havic HV G-92 Gamepad",
  variation: {
    images: [
      "https://i.ibb.co/ng50xD7/havic-remote-v1.png",
      "https://i.ibb.co/TPVVPgy/havic-remote-v2.png",
      "https://i.ibb.co/qr82rLd/havic-remote-v3.png",
      "https://i.ibb.co/XZC443y/havic-remote-v4.png",
      "https://i.ibb.co/F0Cf0SQ/havic-remote-v5.png",
    ],
    colors: ["black", "white"],
    size: ["XS", "S", "M", "L", "XL"],
  },
  stock: 5,
  rating: 5,
  prices: { price: 754, percent: 4 },
  description:
    "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
};

// Product Details Page
export default function Details() {
  const [product, setProduct] = useState(demData);

  return (
    <>
      <PageSection>
        <div className="grid grid-cols-2 md:grid-cols-7 lg:grid-cols-12 gap-y-4 gap-x-6">
          {/* preview images */}
          <div className="col-span-2 md:col-span-4 lg:col-span-7">
            <PreviewImages images={product?.variation?.images} />
          </div>

          {/* product details */}
          <div className="col-span-2 md:col-span-3 lg:col-span-5">
            <DetailsContent details={product} />
          </div>
        </div>
      </PageSection>
    </>
  );
}
