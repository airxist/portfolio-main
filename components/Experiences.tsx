import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Experiences = () => {
  return (
    <div className="py-10" id="testimonials">
      <h1 className="heading">
        My <span className="text-purple">work experiences</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            className="px-5 flex flex-col items-start md:flex-row md:items-center md:space-x-5 py-3"
            borderRadius="1.35rem"
            duration={(Math.floor(Math.random() * 1000) + 5000)}
            containerClassName={card.className}
          >
            <img src={card.thumbnail} alt={card.thumbnail} className="w-16 md:w-20 lg:w-32 block" />
            <div className="mt-2">
              <h1 className="text-xl md:text-2xl font-bold text-start">{card.title}</h1>
              <p className="mt-3 text-start text-white-100 font-semibold">{card.desc}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
