export const ExperienceCompanyCard = ({ companyName, description }) => {
    return (
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-start mb-2">
          <div className="w-10 h-10 bg-white rounded mr-3 flex-shrink-0"></div>
          <div>
            <div className="font-medium">{companyName}</div>
            <p className="text-xs text-gray-400">{description}</p>
          </div>
        </div>
        <div className="text-xs text-right text-gray-400">View Profile</div>
      </div>
    );
  };