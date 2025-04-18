import { Link } from 'react-router-dom';
import useMeta from '../../hooks/useMeta';

export default function PageNotFound() {

    useMeta({
        title: `404 - Page Not Found | EcommEase`,
        description: `Oops! Looks like you've hit a page that doesn't exist. Get back on track with EcommEase's 404 error page.`
    })

    return (
        <div className="flex flex-col items-center justify-center h-[80vh] bg-gray-100">
            <div className="text-6xl font-bold text-gray-800 mb-4">404</div>
            <div className="text-2xl text-gray-600 mb-8">Page Not Found</div>
            <Link to={`/`} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out">
                Go Home
            </Link>
        </div>
    );
}
