export const FoundedCompanyCard = ({
    companyName,
    foundedIn,
    description,
    active,
  }) => {
    return (
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-start mb-2">
          <div className="w-10 h-10 mt-1 bg-white rounded mr-3 flex-shrink-0"></div>
          <div>
            <div className="flex items-center">
              <span className="font-medium">{companyName}</span>
              <span className="ml-2 bg-green-500 text-xs px-1.5 py-0.5 rounded">
                {active ? "ACTIVE" : "INACTIVE"}
              </span>
            </div>
            <p className="text-xs text-gray-400">{foundedIn}</p>
            <p className="text-xs text-gray-400">{description}</p>
          </div>
        </div>
        <div className="text-xs text-right text-gray-400">View Profile</div>
      </div>
    );
  };