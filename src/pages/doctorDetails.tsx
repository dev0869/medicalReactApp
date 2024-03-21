import useAdminHooks from "@/hooks/useAdminHooks";
import { useParams } from "react-router-dom";
const DoctorDetails = () => {
  const { id } = useParams();
  const { data, isFetching } = useAdminHooks(
    `doctorid:${id}`,
    `/doctors/${id}`
  );
  if (isFetching) {
    return "loading";
  }
  return (
    <>
      <div className="w-full py-12 lg:py-16 xl:py-24">
        <div className="container grid items-start px-4 gap-6 lg:grid-cols-2 lg:px-6 xl:gap-12 xl:max-w-6xl">
          <div className="space-y-6 lg:order-1">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                {data.expertise}
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {data.fullname}
                </h1>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="text-gray-500 dark:text-gray-400">
                    4.0 average rating
                  </div>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                {data.shortDiscription}
              </p>
            </div>
            <div className="space-y-4">
              <dl className="grid grid-cols-2 gap-2 text-sm">
                <div className="font-medium">Name</div>
                <div>{data.fullname}</div>
                <div className="font-medium">Specialty</div>
                <div>{data.expertise}</div>
                <div className="font-medium">Experience</div>
                <div>{data.experince}+ years</div>
                <div className="font-medium">Language</div>
                <div>{data.language.join(" , ")}</div>
                <div className="font-medium">Education</div>
                <div>{data.education}</div>
                <div className="font-medium">charges</div>
                <div>₹ {data.charges.toLocaleString("en-IN")}</div>
              </dl>
              <div className="grid gap-1.5 text-sm">
                <p className="text-base font-medium">About Me</p>
                <p>{data.shortDiscription}</p>
              </div>
            </div>
            <div className="grid gap-2 text-sm">
              <div>
                <label htmlFor="phone">Phone</label>
                <p className="inline-block ml-2.5 text-sm font-medium sm:text-base dark:text-gray-400">
                  +91 {data.mobile}
                </p>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <p className="inline-block ml-2.5 text-sm font-medium sm:text-base dark:text-gray-400">
                  {data.email}
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6 sticky top-[30%] ">
            <img
              alt="Dr. Alicia Clark"
              height="100%"
              src="data:image/jpeg;base64,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"
              width="400"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-start px-4 py-10 gap-6 lg:grid-cols-2 lg:px-6 lg:py-12 xl:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">
              Qualifications
            </h2>
            <div className="space-y-2 text-sm">
              <div>
                <h3 className="font-semibold">Board Certifications</h3>
                <p>American Board of Family Medicine</p>
              </div>
              <div>
                <h3 className="font-semibold">Education</h3>
                <ul className="list-disc list-inside">
                  <li>MD, University of Medical Sciences</li>
                  <li>Residency, Family Medicine, City Hospital</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">
              Services
            </h2>
            <div className="grid gap-4 md:gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold">Annual Physical</h3>
                <p>
                  Comprehensive physical exam to assess your overall health.
                  Includes blood pressure measurement, cholesterol screening,
                  and immunization review.
                </p>
                <div className="font-semibold">$150</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  Telemedicine Consultation
                </h3>
                <p>
                  Virtual visit with the doctor from the comfort of your home.
                  Available for follow-up appointments, medication refills, and
                  non-urgent medical issues.
                </p>
                <div className="font-semibold">$100</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetails;
