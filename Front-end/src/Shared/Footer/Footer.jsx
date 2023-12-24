import Input from "../../Components/Input";
import Identity from "../Header/Identity";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          <div>
            <Identity />

            <button>Subscribe</button>

            <p> Get 10% of your first order </p>
            <div>
              <Input />
            </div>
          </div>

          <div className="space-y-5">
            <h3> Support </h3>

            <div>
              <p> Dhalarchar, Aminpur, Pabna, Rajshahi, Bangladesh</p>

              <a className="block"> msshipon234@gmail.com </a>
              <a className="block"> +880 1765037372 </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
