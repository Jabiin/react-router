import heropic from "../assets/heropic.png";

function Hero() {
  return (
    <div className="flex  items-center ">
      <div className="">
        <h1 className="text-8xl font-extrabold">TOUCH OF NATURE</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>{" "}
          Quisque felis mauris, dapibus sit amet vehicula quis, se
        </p>
      </div>

      <img src={heropic} width={500} alt="" />
    </div>
  );
}

export default Hero;
