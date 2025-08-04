import tree from "../../assets/tree.png";
import leaf from "../../assets/leaf.png";
import leaves from "../../assets/leaves.png";
import leaf2 from "../../assets/leaf2.png";

const PlantTree = () => {
  return (
    <div className="h-screen w-[85%] m-0 flex justify-end items-center">
      <div className="w-1/2 h-full p-[5%_1%] box-border flex flex-col">
        <img
          src={leaf}
          width="30px"
          height="30px"
          className="ml-[7%] mb-0 overflow-hidden"
        />
        <h1 className="text-[60px] text-[#43633a] ml-[7%] mb-0 mt-0 font-bold">
          Plant A Tree For
        </h1>
        <h1 className="text-[60px] text-[#43633a] ml-[7%] mb-0 mt-0 font-bold">
          Better Life
        </h1>
        <p className="w-[90%] ml-[7%] mt-0 p-[2%_0%_0%_0%]">
          {" "}
          The Plant a Tree feature helps users calculate the number of trees
          needed to offset their carbon emissions. an actionable tree-planting
          goal. It's an easy way to promote sustainability and achieve carbon
          neutrality.{" "}
        </p>{" "}
        <div style={{ width: "65%", margin: 0, padding: 0 }}>
          <img
            src={leaf2}
            width="30px"
            height="30px"
            className="ml-[100%] mb-0"
          />{" "}
        </div>
        <div className="flex flex-col w-[65%] border border-solid ml-[7%] p-1 mt-0 rounded-[5px]">
          <div className="flex w-[94%] p-3">
            <div className="w-[35%]">Area of Land Required</div>
            <div className="w-[70%] h-[50%] border border-gray-500 rounded-[5px] text-center">
              0
            </div>
          </div>
          <div className="flex w-[94%] p-3">
            <div className="w-[35%]">No of trees to be planted</div>
            <div className="w-[70%] h-[50%] border border-gray-500 rounded-[5px] text-center">
              0
            </div>
          </div>
          <div className="flex w-[94%] p-3">
            <div className="w-[35%]">Species of the tree</div>
            <div className="w-[70%] h-[50%] border border-gray-500 rounded-[5px] text-center">
              0
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-full w-1/2 overflow-hidden">
        <img src={tree} width="80%" height="80%" />
      </div>
    </div>
  );
};

export default PlantTree;
