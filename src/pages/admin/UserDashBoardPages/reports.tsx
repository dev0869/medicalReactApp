import { Button } from "@/components/ui/button";
import useAdminHooks from "@/hooks/useAdminHooks";

const Reports = () => {
  const { data: me } = useAdminHooks("auth", "auth/me" || "");
  const { data: report } = useAdminHooks(
    `reports:${me?._id}`,
    `/report/${me?._id}` || ""
  );

  return (
    <>
      <div id="print-section" className="flex-col px-8 py-4 space-y-8 border-2 rounded-lg mx-auto max-w-2xl">
        <div className="bg-gray-100 w-fit px-4 py-4 grid gap-1">
          <p className="text-xl text-gray-800 font-[800]">Patient Report</p>
          <p>Report for patient ID: <span className=" font-[800]">123456</span></p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <div className="font-semibold">Patient Name:</div>
              <div>John Doe</div>
              <hr />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-semibold">Referred By:</div>
              <div>Dr. Smith</div>
              <hr />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div className="font-semibold">Illness</div>
              <div>
                John Doe was diagnosed with Influenza. He is currently
                undergoing treatment.
              </div>
              <hr />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-semibold">Report</div>
              <div>
                Patient's vitals are stable. Prescription: Plenty of rest,
                plenty of water, and over-the-counter pain relievers.
              </div>
              <hr />
            </div>
          </div>
          <a href="https://learn.pcc.com/wp/wp-content/uploads/622pccehr08.png" target="_blank" rel="noopener noreferrer">


          <img
            alt="Report Image"
            className="object-cover rounded-lg"
            height={500}
            src="https://learn.pcc.com/wp/wp-content/uploads/622pccehr08.png"
            style={{
              aspectRatio: "800/500",
              objectFit: "cover",
            }}
            width={800}
          />
          </a>
          <div>
            <Button onClick={() => window.print()}>Print</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
