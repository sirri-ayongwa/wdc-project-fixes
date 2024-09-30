import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import { useWorld } from "../context";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

const Blogs = ({ isHome = true }) => {
  const { posts } = useWorld();

  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading
          tag="World Disaster center Articles"
          title="What we’re working on"
        />

        <div className="relative grid gap-6 md:grid-cols-3 md:gap-4 md:pb-[7rem]">
          {posts?.map((item) => {
            // const status = item.status === "done" ? "Done" : "In progress";

            return (
              <Link
                to={`/blogs/${item._id}`}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
                key={item._id}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>
                        {dateFormat(
                          new Date(item.createdAt),
                          "dd/mm/yyyy - HH:MM"
                        )}
                      </Tagline>

                      {/* <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          className="mr-2.5"
                          src={item.status === "done" ? check2 : loading1}
                          width={16}
                          height={16}
                        />
                      </div> */}
                    </div>

                    <div className="mb-10 -my-5 -mx-15">
                      <img
                        className="w-full"
                        src={item.image?.url}
                        width={628}
                        height={426}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    {/* <p className="body-2 text-n-4">{item.text}</p> */}
                  </div>
                </div>
              </Link>
            );
          })}

          <Gradient />
        </div>

        {!isHome && (
          <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
            <Button href="/blogs">More</Button>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Blogs;
