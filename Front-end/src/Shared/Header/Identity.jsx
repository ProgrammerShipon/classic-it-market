import { Link } from "react-router-dom";

export default function Identity() {
  return (
    <>
      <Link className="text-xl md:text-2xl lg:text-[1.6rem] py-5 px-3" to="/">
        <span className="text-black px-3 font-bold">
          Classic<span className="text-primary">It</span>Market
        </span>
      </Link>
    </>
  );
}
