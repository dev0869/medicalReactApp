
const Contact = () => {
  return (
    <div className="md:flex mt-8">
      <form action="#" className="px-8 py-4 space-y-8">
        <div>
          <label
            htmlFor="email"
            className="block  text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block  text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block  text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Your message
          </label>
          <input
            id="message"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave a comment..."
          />
        </div>
        <button
          type="submit"
          className="py-3 px-5 text-sm f ont-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Send message
        </button>
      </form>
      <div className="md:w-2/3 md:ml-16">
        <h3 className="text-lg sm:text-xl  mb-6 font-semibold">
          Corporate office/Registered office
        </h3>
        <div>
          <p className="my-1.5">
            <strong>Medi Assist Healthcare Services Limited</strong>
            <br />
            CIN: U74900KA2000PLC027229
          </p>
          <p className="my-1.5">
            Address: Tower D, 4th Floor, IBC Knowledge Park, 4/1 Bannerghatta
            Road, Bangalore - 560 029.
          </p>
          <p className="my-1.5">
            Phone:{" "}
            <a href="tel:8069190000" className="mr-4 text-black">
              +91 80 69190000
            </a>
            Email:{" "}
            <a href="mailto:ask@mediassist.in" className="text-black">
              ask@mediassist.in
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-y-4 0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d972.1553793346658!2d77.6028841!3d12.9320302!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c803af6943%3A0xe56aea3d678147a!2sMedi%20Assist!5e0!3m2!1sen!2sin!4v1686129105115!5m2!1sen!2sin"
            height="320"
            width="100%"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: "0px", paddingTop: "21px" }}
          ></iframe>
          <p>
            Tower D, 4th Floor, IBC Knowledge Park, 4/1 Bannerghatta Road,
            Bangalore – 560 029
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
