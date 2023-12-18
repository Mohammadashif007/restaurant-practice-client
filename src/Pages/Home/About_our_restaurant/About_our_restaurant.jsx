import aboutImage from "../../../assets/home/chef-service.jpg";
const About_our_restaurant = () => {
    return (
        <div
            className="hero h-[450px] w-3/4 mx-auto my-20"
            style={{
                backgroundImage: `url("${aboutImage}")`,
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content bg-white text-black">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                    <p className="mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus, libero accusamus laborum deserunt
                        ratione dolor officiis praesentium! Deserunt magni
                        aperiam dolor eius dolore at, nihil iusto ducimus
                        incidunt quibusdam nemo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About_our_restaurant;
