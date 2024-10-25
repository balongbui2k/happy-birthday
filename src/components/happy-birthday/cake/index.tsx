import chocolateCake from "/src/assets/images/cakes/chocolate-cake.png";
import blueberryCake from "/src/assets/images/cakes/blueberry-cake.png";

export const Cake = ({ candleVisible }: { candleVisible: boolean }) => {
  return (
    <div className="relative flex justify-center items-center">
      <img src={chocolateCake} alt="" className="" />
      <div className="absolute top-32">
        <div className="bg-[#7b020b] w-4 h-14 rounded-[5px] flex justify-center">
          {candleVisible ? (
            <span className="flame"></span>
          ) : (
            <span className="w-px h-3 bg-black absolute top-0 -translate-y-3"></span>
          )}
        </div>
      </div>
    </div>
  );
};
