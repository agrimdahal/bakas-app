import AboutBanner from "./components/Banner";
import Process from "./components/Process";

export default function About() {
    return (
      <><div className="mt-[100px] flex flex-col gap-[20px] justify-center items-center md:flex-col md:justify-center">
            <h1 className=" mt-[100px] text-8xl font-extrabold text-green-300 "  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>BAKAS</h1>
            <AboutBanner />
            <Process />
        </div></>
    );
  }
  