import { heartIcon, magnifyGlass, tollyIcon } from "../../Utils/all-icons-svg";

export default function SearchCart() {
  return (
    <>
      <li>
        <div className="relative bg-secondary py-2 px-3 rounded-[4px]">
          <input
            placeholder="What are you looking for?"
            type="text"
            id="search"
            className="bg-transparent focus:outline-none pr-5"
          />

          <label
            className="absolute top-1/2 -translate-y-1/2 right-1 "
            htmlFor="search"
          >
            <span> {magnifyGlass} </span>
          </label>
        </div>
      </li>
      <li>
        <span>{heartIcon}</span>
      </li>
      <li>
        <span>{tollyIcon}</span>
      </li>
    </>
  );
}