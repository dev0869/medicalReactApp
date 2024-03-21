export default function Hero() {
  return (
    <div className="max-w-screen-lg2 h-screen mx-auto py-8 md:py-16 px-4 xl:px-0 !pb-0 !pt-0">
      <div className="hero-section relative">
        <div className="w-full md:w-6/12 mb-6 md:absolute top-32 md:top-24 lg:top-32 left-6 z-0 pt-10 md:!pt-0">
          <div
            data-aos-delay={400}
            data-aos-duration="1000"
            data-aos="fade-right"
            className="text-4xl  linearText lg:text-6xl !leading-tight font-bold mb-4 md:max-w-xs"
          >
            Borderless <span className="linearText">Benefits</span>
          </div>
          <div
            data-aos-delay={1600}
            data-aos-duration="2000"
            data-aos="fade-right"
            className=" para lg:w-4/5"
          >
            A Third Party Administrator delivering capabilities to the insurance
            ecosystem across geographies and networks for over two decades.
          </div>
        </div>
        <video
          src="/home-page-animation.mp4"
          width="100%"
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block h-full mb-10"
        />
        <video
          src="/home-page-animation-mob.mp4"
          id="herobanner"
          autoPlay
          muted
          playsInline
          className="w-[99%] ml-[1%] block md:hidden"
        />
      </div>
    </div>
  );
}
