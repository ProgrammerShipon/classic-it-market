import { useEffect, useState } from "react";

const PreviewImages = ({ images: imgs, reCall }) => {
  const [images, setImages] = useState([...imgs]);
  const [imageView, setImageView] = useState(images[0]);
  const [imageUrl, setImageUrl] = useState(images[0]);
  const [isLoading, setIsLoading] = useState(false);

  // console.log("images ", images);

  useEffect(() => {
    setIsLoading(true);
    const filtered = imgs?.filter((imgUrl) => imgUrl != imageUrl);
    setImages([...filtered]);
  }, [imageView, reCall, imageUrl]);

  useEffect(() => {
    setImageView(imageUrl);
    setIsLoading(false);
  }, [reCall, imageUrl]);

  return (
    <>
      {/* col-span-2 md:col-span-4 lg:col-span-7 */}
      <div className="grid grid-flow-col-dense grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
        <div className="col-span-2 lg:col-span-1 flex flex-col items-center justify-between gap-5">
          {images?.length &&
            images?.map((url, idx) => (
              <figure
                onClick={() => setImageUrl(url)}
                key={idx}
                className="w-full h-28 flex items-center justify-center bg-secondary rounded-md border-2 border-transparent hover:border-primary/50 hover:shadow-sm hover:bg-primary/5 cursor-pointer transition duration-300 group"
              >
                <img
                  className="object-cover w-8/12 h-8/12 group-hover:scale-150 transition duration-300"
                  src={url}
                  alt=""
                />
              </figure>
            ))}
        </div>

        <div className="col-span-2 h-[500px] lg:col-span-3">
          <figure className="w-full h-full flex items-center justify-center bg-secondary rounded-md border-2 border-transparent hover:border-primary/50 hover:shadow-sm hover:bg-primary/5 cursor-pointer transition duration-300 group">
            <img
              className="object-cover w-10/12 h-10/12 group-hover:scale-125 transition duration-300"
              src={imageView}
              alt=""
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default PreviewImages;
