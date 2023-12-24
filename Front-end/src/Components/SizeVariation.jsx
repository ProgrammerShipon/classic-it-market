import { useEffect, useState } from "react";

export default function SizeVariation({ sizeItems, setBuyData }) {
  //   console.log("sizeItems ", sizeItems);
  const [size, setSize] = useState(null);

  useEffect(() => {
    if (size) {
      setBuyData((pre) => {
        return { ...pre, size: size };
      });
    }
  }, [size]);

  return (
    <div className="flex items-center justify-start gap-1">
      {sizeItems?.length &&
        sizeItems?.map((item) => (
          <span
            onClick={() => setSize(item)}
            key={item}
            className={`p-1 border w-7 h-7 flex items-center justify-center cursor-pointer ${
              size === item && "border-primary text-primary bg-primary/5"
            }`}
          >
            {item}
          </span>
        ))}
    </div>
  );
}
