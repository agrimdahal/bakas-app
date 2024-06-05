import Image from "next/image";
import ApplicationImg from "../../../public/applicationimages/application.png";
import ImageGrid from "./components/ImageGrid";

export default function Product() {
  return (
    <><div className="pt-40 flex flex-col lg:gap-[50px] items-center">
          <h1
              className="text-5xl lg:text-8xl font-extrabold text-green-300 text-center mb-8 lg:mb-16"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
          >
              Applicable Industries
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
              <div className="max-w-md lg:max-w-[450px] text-center lg:text-left">
                  <div className="text-lg lg:text-xl mb-8">
                      <h1 className="text-2xl lg:text-lg mb-2 font-bold">Cement and Mining</h1>
                      <p className="mb-4">rotary kiln equipment, drying application.</p>
                      <h1 className="text-2xl lg:text-lg mb-2 font-bold">Energy</h1>
                      <p className="mb-4">boiler equipment, hot air furance/ hot blast stove.</p>
                      <h1 className="text-2xl lg:text-lg mb-2 font-bold">Metal</h1>
                      <p>steel, aluminium copper froging and heat treatement equipment.</p>
                      <h1 className="text-2xl lg:text-lg mb-2 font-bold">Petroleum and Natural gas</h1>
                      <p>petrochemical furances oil and gas plant process equipment(tracer, industial burner)</p>
                      <h1 className="text-2xl lg:text-lg mb-2 font-bold">Asphalt</h1>
                      <p>Mixing Plant, Incinerator, Foundry Machinery, Industrial stoves and other thermal machinery supporting equipment.</p>
                  </div>
              </div>
              <div className="w-full lg:w-[575px] h-[400px] lg:h-[530px] relative mb-8 flex justify-center">
                  <Image src={ApplicationImg} alt={"pellet"} className="rounded-lg" layout="fill" />
              </div>
          </div>
      </div>
      <ImageGrid /></>
  );
}
