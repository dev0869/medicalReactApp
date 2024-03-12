const Contact = () => {
  const handleSubmit = () => {
    console.log("Form submitted");
  };
  return (
    <div className="container mx-auto p-3 max-md:flex-row-reverse flex items-center flex-wrap justify-between gap-4 md:gap-10 py-20">
      <div className="flex-6 space-y-6">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="text-gray-600 md:max-w-[500px]">
          Thank you for considering Excelus MedAssits for your medical
          solutions. Whether you're an international organization or a local
          entity, we are dedicated to providing comprehensive and innovative
          medical services tailored to your needs. We value your interest in our
          services and look forward to assisting you.
        </p>
        <p className="font-medium">MediaclService.io</p>
        <p className="font-medium">321-221-231</p>
        <a className="text-blue-600" href="#">
          Customer Support
        </a>
        <div className="p-4 md:px-8 py-8 bg-white rounded-2xl shadow-2xl mx-auto w-full md:max-w-[400px]">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>
        <p className="mt-2 text-sm text-gray-600">You can reach us anytime</p>
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="firstname" placeholder="First name" />
            <input type="text" name="lastname" placeholder="Last name" />
          </div>
          <input placeholder="Your email" name="email" type="email" />
          <div className="input">
            <select className="border-r-[3px] h-full mr-2 outline-none pr-2">
              <option>+91</option>
              <option>+91</option>
              <option>+91</option>
              <option>+91</option>
              <option>+91</option>
            </select>
            <input
              name="number"
              className="w-full outline-none"
              placeholder="Your Mobile Number"
              type="number"
            />
          </div>
          <textarea
            name="message"
            className="h-20"
            placeholder="How can we help?"
          ></textarea>
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
          <p className="text-xs text-gray-600">
            By contacting us, you agree to our
            <a className="text-blue-600" href="#">
              Terms of service
            </a>{" "}
            and
            <a className="text-blue-600" href="#">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
        <div className="py-4 flex max-md:flex-wrap items-start justify-center gap-10">
          <div>
            <h3 className="text-lg font-semibold">Customer Support</h3>
            <p className="text-sm text-gray-600">
              Our support team is available around the clock to address any
              concerns or queries you may have.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Feedback and Suggestions</h3>
            <p className="text-sm text-gray-600">
              We value your feedback and are continuously working to improve
              Snappy. Your input is crucial in shaping the future of Snappy.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Media Inquiries</h3>
            <p className="text-sm text-gray-600">
              For media-related questions or press inquiries, please contact us
              at mediasnappyapp.com.
            </p>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Contact;
