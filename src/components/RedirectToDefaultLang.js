import { Navigate } from "react-router-dom";

const RedirectToDefaultLang = () => {
	return <Navigate to="/en" replace />;
};

export default RedirectToDefaultLang;
