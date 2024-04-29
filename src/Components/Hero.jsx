import { intro, intro2 } from "../Data";

export const Hero = () => {
  return (
    <section className="flex justify-center item-center pt-0 md:pt-14 flex-col first-color gap-4 px-20">
      <div className="flex justify-between items-center text-[#f2f2f287]">
        <p className="w-[22%]">
          MASTER OF DIGITAL REALMS, SCULPTING CODE INTO CAPTIVATING WEB
          EXPERIENCES WITH FINESSE.
        </p>
        <p>SCROLL TO EXPLORE.</p>
      </div>
      <p className="text-[#f2f2f2] md:text-[10rem] text-7xl transition-all duration-500 font font-bold">
        WEB DEVELOPER.
      </p>
      <p className="text-[#f2f2f287] text-2xl">{intro}</p>
      <hr className="text-[#f2f2f287]"/>
      <div className="flex justify-between">
        <>
          <p className="text-[#f2f2f287] w-[30%]">
            THINGS I CAN HELP YOU WITH
          </p>
        </>
        {/* introduction */}
        <>
          <p className="text-[#f2f2f287] w-[30%]">
            {intro2}
          </p>
        </>
        {/* links */}
        <>
          <div className="text-[#f2f2f287] w-[30%]">
            <div className="flex flex-col justify-center gap-2">
              <button
                className="flex flex-col items-center transition-all duration-300 hover:scale-95 group gap-1"
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
                className="flex flex-col items-center transition-all duration-300 hover:scale-95 group gap-1"
                onClick={() => {
                  window.open("https://twitter.com/___abhishekk", "_blank");
                }}
              >
                <p>TWITTER</p>

                
              </button>
              <button
                className="flex flex-col items-center transition-all duration-300 hover:scale-95 group gap-1"
                onClick={() => {
                  window.open("https://github.com/shriabhi9", "_blank");
                }}
              >
                <p>GITHUB</p>
                
              </button>
            </div>
          </div>
        </>
      </div>
    </section>
  );
};
