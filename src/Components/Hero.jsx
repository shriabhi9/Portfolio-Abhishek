import { intro, intro2, myImage } from "../Data";

export const Hero = () => {
  return (
    <section className="flex justify-center item-center pt-0 md:pt-14 flex-col first-color gap-4 md:px-20 px-10 flex-wrap">
      <div className="flex justify-between items-center text-[#f2f2f287] flex-wrap">
        <p className="md:w-[22%]">
          MASTER OF DIGITAL REALMS, SCULPTING CODE INTO CAPTIVATING WEB
          EXPERIENCES WITH FINESSE.
        </p>
        <p>SCROLL TO EXPLORE.</p>
      </div>
      <div className="md:block flex flex-col">
        <p className="text-[#f2f2f2] md:text-[10rem] text-5xl transition-all duration-500 font font-bold">
          WEB DEVELOPER.
        </p>
      </div>

      <p className="text-[#f2f2f287] md:text-2xl text-md">{intro}</p>
      <hr className="text-[#f2f2f287]" />
      <div className="flex justify-between md:flex-row flex-col gap-4">
        <div>
          <p className="text-[#f2f2f287] md:text-md text-sm">Hey.</p>
        </div>
        {/* introduction */}
        <div>
          <p className="text-[#f2f2f287] md:text-md text-sm md:w-[20em]">
            {intro2}
          </p>
        </div>
        {/* links */}
        <div>
          <div className="text-[#f2f2f287] md:text-md text-sm">
            <div className="flex flex-col gap-2">
              <button
                className="flex flex-col md:items-center items-start transition-all duration-300 hover:scale-95 group gap-1"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/abhishek-shrivastav-7362811bb/",
                    "_blank"
                  );
                }}
              >
                <p>LINKED IN</p>
              </button>
              <button
                className="flex flex-col md:items-center items-start transition-all duration-300 hover:scale-95 group gap-1"
                onClick={() => {
                  window.open("https://twitter.com/___abhishekk", "_blank");
                }}
              >
                <p>TWITTER</p>
              </button>
              <button
                className="flex flex-col md:items-center items-start transition-all duration-300 hover:scale-95 group gap-1"
                onClick={() => {
                  window.open("https://github.com/shriabhi9", "_blank");
                }}
              >
                <p>GITHUB</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
