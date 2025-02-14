import { Breadcrumbs, Breadcrumb } from "react-aria-components";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const routeTranslations = {
  "/": "Accueil",
  "/register": "Inscription",
  // Add more routes and their translations here
};

const BreadcrumbsComponent = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs className="flex space-x-2 py-4 px-6">
      <Breadcrumb>
        <div className="flex items-center space-x-1">
          <Link to="/" className="text-blue-600 hover:underline">
            {routeTranslations["/"]}
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-500" />
        </div>
      </Breadcrumb>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const translatedValue = routeTranslations[to] || value;

        return (
          <Breadcrumb key={to} isCurrent={isLast}>
            <div className="flex items-center space-x-1">
              {isLast ? (
                <span className="text-gray-500">{translatedValue}</span>
              ) : (
                <>
                  <Link to={to} className="text-blue-600 hover:underline">
                    {translatedValue}
                  </Link>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </>
              )}
            </div>
          </Breadcrumb>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;