import { Button } from "@/components/ui/button";
import useAdminHooks from "@/hooks/useAdminHooks";
import {
  MDBCardText,
  MDBCardBody,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
const ProfileSetting = () => {
  const { data } = useAdminHooks("auth", "auth/me" || "");
  console.log(data);
  return (
    <>
      <section>
        <div className="py-5 px-4 gap-8   flex">
          <div className="flex-[2]">
            <div className="flex flex-col">
              <div className="text-center rounded-lg flex item-center shadow-sm border-[1px] flex-col ">
                <div className="w-full h-[200px] flex justify-center rounded-full">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="w-full h-full object-contain"
                    style={{ width: "150px" }}
                  />
                </div>
                <p className="text-muted mb-1">{data?.username}</p>
                <p className="text-muted mb-4">patient</p>
              </div>

              <div className=" rounded-lg flex item-center  shadow-sm border-[1px] flex-col my-4 ">
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fas icon="globe fa-lg text-warning" />
                      <MDBCardText>https://mdbootstrap.com</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="github fa-lg"
                        style={{ color: "#333333" }}
                      />
                      <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="twitter fa-lg"
                        style={{ color: "#55acee" }}
                      />
                      <MDBCardText>@mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="instagram fa-lg"
                        style={{ color: "#ac2bac" }}
                      />
                      <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="facebook fa-lg"
                        style={{ color: "#3b5998" }}
                      />
                      <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
              </div>
            </div>
          </div>
          <div className="flex-[6]">
            <div className="rounded-lg flex item-center  shadow-sm border-[1px] flex-col">
              <div className="flex items-center px-4  gap-9 py-4">
                <p className="text-md font-[600] text-gray-700">Full Name :</p>
                <p className="text-md  font-[600] text-gray-700">
                  {data?.fullname}
                </p>
              </div>
              <hr />
              <div className="flex items-center px-4  gap-9 py-4">
                <p className="text-md font-[600] text-gray-700">
                  Mobile Number:
                </p>
                <p className="text-md font-[600] text-gray-700">
                  {data?.mobile}
                </p>
              </div>
              <hr />
              <div className="flex items-center px-4  gap-9 py-4">
                <p className="text-md font-[600] text-gray-700">Email Id:</p>
                <p className="text-md font-[600] text-gray-700">
                  {data?.email}
                </p>
              </div>
              <hr />
            </div>

            <div className="rounded-lg gap-6 px-6  flex item-center  shadow-sm border-[1px] flex-row my-4 ">
              <div className="rounded-lg flex item-center flex-[4]  shadow-sm border-[1px] flex-col my-4 ">
                <div className="mb-4 p-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">
                      <span className="text-primary font-italic me-1">
                        assigment
                      </span>{" "}
                      Project Status
                    </MDBCardText>
                    <MDBCardText
                      className="mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Web Design
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Website Markup
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      One Page
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Backend API
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </div>
              </div>

              <div className="rounded-lg flex item-center flex-[4]  shadow-sm border-[1px] flex-col my-4 ">
                <div className="py-4 px-4">
                  <div className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <div className="flex flex-col space-y-0.5">
                      <div className="text-base font-semibold">
                        Dr. John Doe
                      </div>
                      <div className="text-xs">Referred by Dr. Smith</div>
                    </div>
                    <div className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div className="grid gap-3 text-sm">
                    <div className="flex items-center gap-3">
                      {/* <UserIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" /> */}
                      <div>
                        <div>Name</div>
                        <div className="text-sm font-medium">Alice Johnson</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* <ClipboardIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" /> */}
                      <div>
                        <div>Illness</div>
                        <div className="text-sm font-medium">
                          Hypertension, Type 2 Diabetes
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between space-y-0.5">
                    <Button>View Report</Button>
                    <Button size="sm" variant="outline">
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default ProfileSetting;
