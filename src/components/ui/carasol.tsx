import Slider from "react-slick";

const carasolData = [
  "https://img.freepik.com/free-photo/indian-doctor-r…out-results-tests-medicine-health_496169-2765.jpg",
  "https://img.freepik.com/free-vector/blue-medical-b…ground-with-hexagonal-shape-design_1017-26839.jpg",
];

export default function Carasol() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {carasolData.map((ele, index) => (
        <img src={ele} key={index} alt={ele} />
      ))}
    </Slider>
  );
}
