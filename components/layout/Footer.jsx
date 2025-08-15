import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-white  mt-auto ">
      <div className="bg-primary-700 py-4">
        <div className="container flex flex-row items-center justify-center mx-auto">
          <div className="max-w-[400px] max-h-[300px] flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2393.358972546406!2d110.39808377297817!3d-7.747491876192172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sid!2sid!4v1755270913489!5m2!1sid!2sid"
              width="600"
              height="300"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <h3>Alamat</h3>
            <p>Jl. Tutul No. 16 Papringan</p>
          </div>
          <div>Hi</div>
        </div>
      </div>

      <div className="bg-[#1B1B1B] py-2">
        <div className="container mx-auto text-center">
          <p className="text-sm font-light">
            &copy; {new Date().getFullYear()} KWT Kuntani. All rights reserved.
            Developed by{" "}
            <a href="" className="hover:text-blue-400">
              Tim KKN-M UNY
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
