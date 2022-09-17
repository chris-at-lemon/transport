import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1">
        <div className="text-4xl font-transportHeavy text-center">Hello Transport</div>
        <div className="text-4xl font-transportMedium text-center">Hello Transport</div>
        <div className="text-4xl font-transportLight text-center">Hello Transport</div>
      </div>
    </div>
  );
};

export default Home;
