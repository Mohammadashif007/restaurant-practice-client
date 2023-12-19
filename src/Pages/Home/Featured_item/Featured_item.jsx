import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Featured_item.css";
import featuredImg from "../../../assets/home/featured.jpg";
const Featured_item = () => {
    return (
        <div className="featured_bg bg-fixed my-10 py-10 ">
            <SectionTitle
                heading={"from our menu"}
                subHeading={"check it out"}
            ></SectionTitle>
            <div className="flex justify-center items-center gap-8 p-10">
                <div className="">
                    <img className="" src={featuredImg} alt="" />
                </div>
                <div className="text-white">
                    <p className="text-[24px]">March 20, 2023</p>
                    <p className="text-[26px]">WHERE CAN I GET SOME?</p>
                    <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-b-4">View Full Menu</button>
                </div>
            </div>
        </div>
    );
};

export default Featured_item;
