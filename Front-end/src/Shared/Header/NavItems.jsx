import { NavLink, useLocation } from "react-router-dom";

const NavItems = () => {
  const location = useLocation();
  // console.log("location ", location);

  const navbarData = [
    {
      label: "Home",
      route: "/",
      name: "home",
      id: "home",
      icons: null,
    },
    {
      label: "Contact",
      route: "/contact",
      name: "contact",
      id: "contact",
      icons: null,
    },
    {
      label: "About",
      route: "/about",
      name: "about",
      id: "about",
      icons: null,
    },
  ];

  return (
    <>
      {/* <ul className="flex flex-col md:flex-row justify-end items-center gap-3"> */}
      {navbarData &&
        navbarData.map((item, idx) => (
          <li key={idx}>
            <NavLink
              className={({ isActive }) =>
                `py-4 px-3 block border-b-2 lg:border-t-4 hover:text-primary hover:border-t-primary md:hover:border-b-primary border-t-transparent transition duration-300 ${
                  isActive == item?.route || location.hash == item?.id
                    ? "border-primary text-primary hover:text-primary/60"
                    : "border-transparent"
                }`
              }
              to={item?.route}
            >
              <span> {item.label} </span>
            </NavLink>
          </li>
        ))}

      <li>
        <NavLink
          className={({ isActive }) =>
            `py-4 px-3 block border-b-2 lg:border-t-4 hover:text-primary hover:border-t-primary md:hover:border-b-primary border-t-transparent transition duration-300 ${
              isActive
                ? "border-primary text-primary hover:text-primary/60"
                : "border-transparent"
            }`
          }
          to="/sign-up"
        >
          <span> Sign Up </span>
        </NavLink>
      </li>
      {/* </ul> */}
    </>
  );
};

export default NavItems;
