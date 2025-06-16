import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();
return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
        <h1 className="text-4xl font-bold text-primary-600 mb-2">Error 404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Page NotFound
        </h2>
        <p className="text-gray-500 mb-6">
            Not Found Page In IntelSega
        </p>
        <button
        onClick={() => navigate(-1)}
        className="px-6 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all"
        >
            Go Back 
        </button>
    </div>
);
};

export default NotFoundPage;
