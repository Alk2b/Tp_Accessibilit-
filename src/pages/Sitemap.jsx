import { Link } from "react-router-dom";
import routesConfig from "@/utils/routesConfig";

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-white font-inter pt-20">
      <main className="container mx-auto max-w-2xl px-4 py-8">
        <h1 className="text-3xl font-newsreader mb-6" aria-label="Plan du site">Plan de site</h1>
        <ul className="space-y-4">
          {routesConfig.map((route) => (
            <li key={route.path}>
              <Link to={route.path} className="text-blue-600 hover:underline">
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Sitemap;