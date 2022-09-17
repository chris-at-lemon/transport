import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto mt-4">
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
  );
};

export default Home;
