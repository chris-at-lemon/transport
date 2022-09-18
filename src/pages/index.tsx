import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center justify-center container mx-auto pt-4 h-screen w-screen">
        <div className="grid grid-cols-1">
          <div className="text-4xl font-transportHeavy text-center mb-4">Hello Transport Heavy</div>
          <div className="text-2xl  font-transportHeavy text-center mb-4">Hello Transport Heavy</div>
          <div className="text-xl  font-transportHeavy text-center mb-4">Hello Transport Heavy</div>
          <div className="text-base font-transportHeavy text-center mb-4">Hello Transport Heavy</div>
          <hr />
          <div className="text-4xl font-transportMedium text-center mb-4 mt-4">Hello Transport Medium</div>
          <div className="text-2xl  font-transportMedium text-center mb-4">Hello Transport Medium</div>
          <div className="text-xl  font-transportMedium text-center mb-4">Hello Transport Medium</div>
          <div className="text-base font-transportMedium text-center mb-4">Hello Transport Medium</div>
          <hr />
          <div className="text-4xl font-transportLight text-center mb-4 mt-4">Hello Transport Light</div>
          <div className="text-2xl  font-transportLight text-center mb-4">Hello Transport Light</div>
          <div className="text-xl  font-transportLight text-center mb-4">Hello Transport Light</div>
          <div className="text-base font-transportLight text-center mb-4">Hello Transport Light</div>
        </div>
      </div>

      <div className="flex pt-4 h-screen w-full bg-hero-pattern bg-top-4 bg-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className=" col-start-3 col-span-8">
              <div className="text-5xl pt-16 font-transportHeavy font-black text-center text-white leading-12">Find your next new or used car, van or motorbike with CarsVansandBikes.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-4 h-screen w-full bg-header-pattern bg-top bg-100 bg-no-repeat">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-start-3 col-span-8">
              <div className="flex h-screen items-center">
                <div className=" basis-full p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <p className="font-transportMedium text-base font-normal">We pack a punch</p>
                  <p className=" font-transportLight">
                    CarsVansandBikes is new, launched in May 2021, but we are certainly not new to digital advertising. We started our online services journey back in 2003 when we created one of the most innovative and disruptive energy
                    comparison companies which we sold to GoCompare in 2018.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
