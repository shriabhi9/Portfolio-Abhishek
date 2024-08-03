import { intro, intro2 } from "../Data";

export const Hero = () => {
  return (
    <section className="flex flex-col justify-center item-center gap-4 md:px-20 px-6 flex-wrap md:py-10 py-20">
      <div className="flex justify-between items-center flex-wrap">
        <p className="md:w-[22%] w-[230px] md:text-xs text-[10px]">
          MASTER OF DIGITAL REALMS, SCULPTING CODE INTO CAPTIVATING WEB
          EXPERIENCES WITH FINESSE.
        </p>
        <p className="md:text-xs text-[10px]">SCROLL TO EXPLORE.</p>
      </div>
      <p className="md:text-9xl text-3xl font-bold">WEB DEVELOPER</p>

      <p className=" md:text-xl text-xs">{intro}</p>
      <hr className="" />

      <div className="flex justify-between md:flex-row flex-col gap-4">
        <div>
          <p className=" md:text-xs text-[10px]">Hey.</p>
        </div>
        {/* introduction */}
        <div>
          <p className=" md:text-xs text-[9px] md:w-[30em] w-full">{intro2}</p>
        </div>
        {/* links */}
        <div>
          <div className=" md:text-xs text-[10px]">
            <div className="flex flex-col gap-2 ">
              <button
                className="flex flex-col md:items-center items-start transition-all duration-300 hover:scale-95 group gap-1 "
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/abhishek-shrivastav-7362811bb/",
                    "_blank"
                  );
                }}
              >
                <p className="md:text-xs text-[9px]">LINKED IN</p>
              </button>
              <button
                className="flex flex-col md:items-center items-start transition-all duration-300 hover:scale-95 group gap-1"
                onClick={() => {
                  window.open("https://twitter.com/___abhishekk", "_blank");
                }}
              >
                <p className="md:text-xs text-[9px]">TWITTER</p>
              </button>
              <button
                className="flex flex-col md:items-center items-start transition-all duration-300 hover:scale-95 group gap-1"
                onClick={() => {
                  window.open("https://github.com/shriabhi9", "_blank");
                }}
              >
                <p className="md:text-xs text-[9px]">GITHUB</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
