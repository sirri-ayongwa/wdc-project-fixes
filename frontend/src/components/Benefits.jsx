import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import DottedWorld from "../assets/hero/dottedWord.jpg";
import { Link } from "react-router-dom";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="World Disaster Center"
        />

        <div className="flex flex-wrap gap-10 mb-10 justify-around">
          {benefits.map((item) => (
            <Link
              to={item.url === "" ? "/" : item.url}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  {/* <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  /> */}

                  <a
                    href={item?.url}
                    className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider"
                  >
                    {item?.url === "" ? "Coming soon" : "Explore more"}
                  </a>

                  {item?.url === "" ? "" : <Arrow />}
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={DottedWorld}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
