import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(x => x);

  return (
    <nav className="bg-gray-100 px-8 py-3 text-sm">
      <ol className="flex space-x-2 text-gray-700">
        <li>
          <Link to="/" className="hover:text-accent">Home</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;
          return (
            <li key={name} className="flex items-center">
              <span className="mx-1">/</span>
              {isLast ? (
                <span className="text-primary font-medium capitalize">{name}</span>
              ) : (
                <Link to={routeTo} className="hover:text-accent capitalize">{name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
