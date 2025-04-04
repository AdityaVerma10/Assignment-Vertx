import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope, FaCheck } from "react-icons/fa";
import { FoundedCompanyCard } from "./reusable/FoundedCompanyCard";
import { ExperienceCompanyCard } from "./reusable/ExperienceCompanyCard";

const ProfileSection = () => {
  return (
    <div className="p-5 mb-4 bg-[#101010]">
      <h2 className="text-2xl font-semibold mb-5">Overview</h2>

      <div className="bg-[#000] rounded-lg p-5 mb-5">
        <div className="flex flex-col lg:items-center md:items-start md:flex-row sm:i">
          <div className="w-24 h-24 bg-gray-700 rounded-full mb-4 md:mb-0 md:mr-5 flex items-center justify-center">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <div>
            <div className="flex items-center mb-1">
              <h3 className="text-xl font-semibold mr-2">Mr. A</h3>
              <div className="bg-blue-500 rounded-full w-4 h-4 flex items-center justify-center">
                <FaCheck className="text-xs text-white" />
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              Co-Founder & CEO at Vertx
            </p>
            <div className="flex justify-between lg:flex-col md:flex-col items-start sm:flex-row sm:justify-between">
              <div className="bg-gray-700 text-xs px-2 py-0.5 rounded inline-block mb-3">
                ENTREPRENEUR
              </div>

              <div className="flex  space-x-3">
                <a href="#" className="text-blue-500 hover:text-blue-400">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <FaTwitter />
                </a>
                <a href="#" className="text-red-500 hover:text-red-400">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-[#000] rounded-lg p-5">
          <h3 className="text-lg font-medium mb-4">Founded Companies</h3>
          <div className="text-5xl font-bold mb-5">02</div>

          <div className="flex flex-col gap-2.5">
            <FoundedCompanyCard
              companyName="Company 1"
              foundedIn="Founded in 2020"
              description={"D2C/E-Commerce"}
              active={true}
            />

            <FoundedCompanyCard
              companyName="Company 2"
              foundedIn="Founded in 2022"
              description={"SaaS/B2B"}
              active={true}
            />
          </div>
        </div>

        <div className="bg-[#000] rounded-lg p-5">
          <h3 className="text-lg font-medium mb-4">Experience</h3>
          <div className="text-5xl font-bold mb-5">03</div>

          <ExperienceCompanyCard
            companyName={"Company 1"}
            description={"2018 - Present"}
          />
          <ExperienceCompanyCard
            companyName={"Company 2"}
            description={"2016 - 2018"}
          />
          <ExperienceCompanyCard
            companyName={"Company 3"}
            description={"2014 - 2016"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
