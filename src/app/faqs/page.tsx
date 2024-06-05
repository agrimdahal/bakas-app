import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "./Header";

export default function AccordionDemo() {
  return (
    <><Header />
    <div className="flex justify-center mt-20 mb-20">
      <Accordion type="single" collapsible className="w-1/2">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h1 className=" text-black text-lg lg:text-xl font-10 hover:text-green-400 transition-colors duration-300 underline-none">What is used to make wood pellets?</h1>
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Pellets are 100% natural and are made from sawdust and forest
            undergrowth species. They have no additives, chemicals, or perfumes added
            in the process.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <h1 className=" text-black text-lg lg:text-xl font-10 hover:text-green-400 transition-colors duration-300 underline-none">What are the benefits of pellets vs. wood?</h1>
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            <ul>
              <li>You don't have to chop wood!</li>
              <li>They are much cheaper than propane</li>
              <li>It's easier to start a fire with pellets because they're dryer than wood.</li>
              <li>They don't have bark or frozen ants on them.</li>
              <li>They are simple to use.</li>
              <li>They are sold nationwide</li>
              <li>You won't have an aching back from chopping wood and pellets are better for the environment!</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <h1 className=" text-black text-lg lg:text-xl font-10 hover:text-green-400 transition-colors duration-300 underline-none">How big are the pellets?</h1>
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            They are approximately 1 ½ millimeter long and 6 mm and 8 mm in
            diameter. They are smooth to the touch and virtually dust-free.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <h1 className=" text-black text-lg lg:text-xl font-10 hover:text-green-400 transition-colors duration-300 underline-none">What makes them stick together if you don’t use additives or
              plastics?</h1>
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Good question. Lignin (which is a natural binding agent from the tree itself)
            combined with the high pressure from the pellet mill as the pellet is pushed
            through the mill, holds the pellets together.
          </AccordionContent>
        </AccordionItem>      <AccordionItem value="item-5">
          <AccordionTrigger>
            <h1 className=" text-black text-lg lg:text-xl font-10 hover:text-green-400 transition-colors duration-300 underline-none">Where can I buy the pellets?</h1>
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Our pellets are sold nationwide. Please contact us to find a store near you.
          </AccordionContent>
        </AccordionItem>      <AccordionItem value="item-6">
          <AccordionTrigger>
            <h1 className=" text-black text-lg lg:text-xl font-10 hover:text-green-400 transition-colors duration-300 underline-none">Where should I store the pellets?
            </h1></AccordionTrigger>
          <AccordionContent className="text-lg">
            Store them in a dry area, and since they are packaged in convenient 25 kg
            bags you may stack them several feet high so you won’t need a great deal of
            storage space.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>
            <h1 className=" text-black text-lg lg:text-xl font-10 hover:text-green-400 transition-colors duration-300 underline-none">What is the actual process of making pellets?</h1></AccordionTrigger>
          <AccordionContent className="text-lg">
            The mixture of sawdust and forest undergrowth is kept in a dry enclosed
            building then it is placed intoand fed to a screening and hammer
            mill process to ensure consistent sawdust for our drying process. We then
            convey the sawdust to the dryer to remove any unneeded moisture and then
            to the pellet mills to be formed into pellets. Once the pellets are formed they
            are cooled down and screened prior to going into the bag. The bags are then
            stacked by our robot 50 bags to a pallet, then a pallet cover and shrink wrap is
            add to help protect the product from the weather.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>
            <h1 className=" text-black text-lg lg:text-xl font-10 hover:text-green-400 transition-colors duration-300 underline-none">Can I put them in my regular wood stove?</h1></AccordionTrigger>
          <AccordionContent className="text-lg">
            Unfortunately, no. You will need a wood pellet stove. The pellet stove is
            also already available in our company.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>
            <h1 className=" text-black text-lg lg:text-xl font-10 hover:text-green-400 transition-colors duration-300 underline-none">Do I need a chimney for my pellet stove?</h1></AccordionTrigger>
          <AccordionContent className="text-lg">
            No. Since the pellets are so efficient, the stoves do not need a chimney. All
            you need to do is vent them outdoors with a 4” pipe through an outside wall.
            So, choose the room you congregate in, place the stove in that room, and
            enjoy the ease and warmth of pellet heat! You'll also enjoy watching the
            flames—and the fact that there is very little ash to clean.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger><h1 className=" text-black text-lg lg:text-x font-10 hover:text-green-400 transition-colors duration-300 underline-none">
            Have you tested them?</h1></AccordionTrigger>
          <AccordionContent className="text-lg">
            Absolutely! BREPL is that Pellet Manufactures that actually has a in house
            testing lab. To confirm our results, we send our product to a third-party
            laboratory too. We pride ourselves on providing quality and environmentally
            friendly products.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-11">
          <AccordionTrigger>
            <h1 className=" text-black text-lg lg:text-xl font-10 hover:text-green-400 transition-colors duration-300 underline-none">Where is BREPL located?</h1></AccordionTrigger>
          <AccordionContent className="text-lg">
            BREPL's head office is located in Tradetower, Thapathali, Kathmandu.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div></>
  );
}
