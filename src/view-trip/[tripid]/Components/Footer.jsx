import React from "react";

const Footer = ({ tripData }) => {
  return (
    <div className="bg-white border rounded-lg text-gray-800 py-8 mt-14 shadow-lg ">
      {/* Central Content */}
      <div className="text-center space-y-6">
        <h1 className="text-2xl font-semibold text-black">
          Crafted with <span className="text-yellow-400">❤️</span> by{" "}
          <span className="text-yellow-300 font-semibold underline decoration-yellow-400 ">
            codeXAnant
          </span>
        </h1>
        <p className="text-sm text-black">
          Powered by{" "}
          <span className="font-semibold text-gray-800 underline">
            Google Gemini
          </span>
        </p>

        {/* Interactive Button */}
        <div className="mt-4">
          <button className="bg-yellow-400 text-black px-5 py-2 font-semibold text-sm rounded-full shadow-md hover:bg-yellow-500">
            Explore Projects
          </button>
        </div>

        {/* Social Icons with Hover Effect */}
        <div className="flex justify-center items-center mt-4 space-x-4">
          <a
            href="https://www.linkedin.com/in/codexanant/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all transform hover:scale-110"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://github.com/codeXAnant"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all transform hover:scale-110"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://twitter.com/codeXAnant"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all transform hover:scale-110"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Twitter_Logo_as_of_2021.svg/512px-Twitter_Logo_as_of_2021.svg.png"
              alt="Twitter"
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="relative mt-6">
        <hr className="border-t border-gray-300 opacity-50 mx-10" />
        <p className="absolute left-1/2 transform -translate-x-1/2 text-gray-200 text-xs mt-2">
          © {new Date().getFullYear()} codeXAnant. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
