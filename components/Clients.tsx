import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Clients = () => {
  return (
    <div className="py-10" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center justify-center p-4 gap-16 mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div className="flex items-center gap-4 flex-wrap justify-center md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <div key={company.id} className="flex items-center max-w-32 md:max-w-60 gap-2">
              <img src={company.img} alt={company.name} className="md:w-10 w-5" />
              <img src={company.nameImg} alt={company.nameImg} className="md:w-24 w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
