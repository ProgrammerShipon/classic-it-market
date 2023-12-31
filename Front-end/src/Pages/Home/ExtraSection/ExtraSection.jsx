import PageSection from "../../../Components/PageSection";
import {
  headPhoneIcon,
  shieldTick,
  trackIcon,
} from "../../../Utils/all-icons-svg";

const extraData = [
  {
    icon: trackIcon,
    title: "Free and fast delivery",
    slogan: "Free delivery for all orders over $140",
  },
  {
    icon: headPhoneIcon,
    title: "24/7 CUSTOMER SERVICE",
    slogan: "Friendly 24/7 customer support",
  },
  {
    icon: shieldTick,
    title: "MONEY BACK GUARANTEE",
    slogan: "We return money within 30 days",
  },
];

const ExtraSection = () => {
  return (
    <PageSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {extraData?.length &&
          extraData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-between text-center space-y-3"
            >
              <figure className="mx-auto bg-black/20 inline-flex justify-center items-center rounded-full w-20 h-20">
                <span className="bg-black inline-flex justify-center items-center w-14 h-14 rounded-full text-white p-2">
                  {item?.icon}
                </span>
              </figure>

              <h3 className="text-xl font-semibold "> {item.title}</h3>
              <p className="text-base font-normal">{item.slogan} </p>
            </div>
          ))}
      </div>
    </PageSection>
  );
};

export default ExtraSection;
