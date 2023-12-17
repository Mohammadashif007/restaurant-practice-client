
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center w-1/4 mx-auto my-10">
            <h3 className="text-[20px] text-[#D99904]">----{subHeading}----</h3>
            <h2 className="text-[40px] uppercase border-y-4 my-5 py-3">{heading}</h2>
        </div>
    );
};

export default SectionTitle;