import { Link } from "react-router-dom";

export interface DoctorDataProps {
  _id: string;
  fullname: string;
  expertise: string[];
  shortDiscription: string;
}
const DoctorCard = ({ data }: { data: DoctorDataProps }) => {
  return (
    <>
      <div className=" w-[25%]  border-2 rounded-lg">
        <div className="p-3 lg:p-5 ">
          <div className="h-[50%]">
            <img
              src="https://doctor-app-s401.onrender.com/img/file_1710836316787.jpg"
              className="w-full"
              alt=""
            />
          </div>
          <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5 ">
            {data?.fullname}
          </h2>
          <div className="mt-2 lg:mt-4 flex items-center justify-between ">
            <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded ">
              {data.expertise}
            </span>
            <div className="flex items-center gap-[6px] ">
              <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor ">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFPSURBVHgBvZTbTcMwFIbPsXsBqUUZId0gTNC+Nn1pNygTABNQNoAJgAlKH4LYomxARogUECDZPtgpQa1T4oRW/SQnTmR/+n1FcEBzz6O2XJo6fvFTnCSJqw9zNZAtOdYv3xTVEhdQAXQ1UE/d1x+pIdFpe660pUlF1J2uCQ1elbRYI2WOM21B+jE/8pu8GfAG9gnor1SPUtKtECI+nnzGBSk9n5yDooGuB6SHB6tSCyR80Y9YEiwao/Qe9RAJ9ggLU2REdA17IndlcyqjzgwRr2AHCNQlD99vfqW7ihXBmZnL/Htj9c2+ZAh3UANbWJBmjaLOEhADqALCgg3Tsf3befb/w4bU3EiVU2YdoO+UioaoLlzhZUHKpIzTNmli9p8+IQ+wjbYclEqB0Ldl5vLgo7cZD9MpIu/ZcgXKL5fq82vL1m8jHCaxJU8IWAyH4BulJZNGgoQ0OQAAAABJRU5ErkJggg=="
                  alt=""
                />
              </span>
              <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor ">
                4
              </span>
            </div>
          </div>
          <div className=" mt-[18px] lg:mt-5 flex items-center justify-between ">
            <div>
              <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor ">
                +4 Patients
              </h3>
              <p className="text-[14px] leading-6 font-[400] text-textColor ">
                {data.shortDiscription.slice(0, 70) + "..."}
              </p>
              <br />
              <Link
                to={`/doctors/${data._id}`}
                className="p-3 rounded-lg border-2 "
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
