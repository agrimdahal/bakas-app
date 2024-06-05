import Image from "next/image";
import industryImg from "../../../../public/Industryoutside.png";

export default function AboutBanner() {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-center mt-8 lg:mt-[50px] gap-8 lg:gap-[100px]">
      <div className="max-w-[550px]  p-8">
        <p className="  text-lg font-light">
          The company has a group of professionals working in the renewable energy
          sector. Production of wood pellet is the first planned project of the
          company. Wood pellet production has not been introduced yet in Nepal
          and BREPL will be the first to establish this kind of industry in the
          country. 

          BREPL has selected undergrowth species of Sagarnath Forestry
          Development Project (SFDP). SFDP is a government-managed plantation
          in the central Terai of Nepal covering 13,500 hectares. The undergrowth
          on the plantation site is the cause of fire hazard of Sagarnath Forest
          and the forest management is spending a huge amount of resources to
          remove or control burn these materials every year. The green biomass
          to be removed from the project site will be 30,000MT. Using this
          quantity of biomass, BREPL has developed a proposal to produce biomass
          pellet around 10,500 MT/year. 

          Wood pellets are fuel made from compressed biomass or sawdust used
          for burning and heating. It is a proven technology of renewable fuel
          being introduced since two decades. It is most popular in European
          countries and the United States. The popularity of using pellet as fuel
          is spreading over the world. The fundamental of being popularity is
          the environmentally friendly renewable fuel. It is made from renewable
          resources and helps to reduce greenhouse gas emissions.
        </p>
      </div>
      <div className="w-[450px] h-[400px] lg:w-[550px] lg:h-[700px]  relative shadow-2xl lg:order-1">
        <Image src={industryImg} alt={"Industry image"} className="rounded-lg" layout="fill" />
      </div>
    </div>
  );
}
