import { Link } from "react-router-dom";
import Loading from "../components/common/Loading";
import useFetch from "../hooks/useFetch";
import useMeta from "../hooks/useMeta";
import HomeProductCard from "../components/product/HomeProductCard";
import HomeSection from "../components/layout/HomeSection";
import WswuLayout from "../components/layout/WswuLayout";

const wswu = [{
    "id": 1,
    "title": "Quality Products",
    "content": "We ensure the highest quality standards for all our products."
},
{
    "id": 2,
    "title": "Affordable Prices",
    "content": "Get the best deals and value for your money."
},
{
    "id": 3,
    "title": "Fast Shipping",
    "content": "Enjoy quick and reliable delivery to your doorstep."
}
]

export default function Home() {
    const metadata = {
        title: "EcommEase - Your Ultimate Shopping Destination",
        description:
            "Discover featured products and latest deals for a seamless shopping experience.",
    };
    useMeta(metadata);

    const { data, loading, error } = useFetch("/products?offset=0&limit=6");

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <p className="text-lg text-center text-red-600">{error}</p>;
    }

    return (
        <main className="max-w-7xl mx-auto p-4">
            <HomeSection center={true} title="Welcome to EcommEase">
                <p className="text-slate-800 text-center mb-8">
                    Discover the best products at unbeatable prices. Shop now and enjoy a
                    seamless shopping experience.
                </p>
                <div className="flex justify-center">
                    <Link
                        to="/shop"
                        className="bg-slate-800 text-white py-2 px-4 rounded"
                    >
                        Shop Now
                    </Link>
                </div>
            </HomeSection>

            <HomeSection title="Featured Products">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data && data.length > 0 ? (
                        data.map((product) => (
                            <HomeProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p className="text-lg text-center">No products found.</p>
                    )}
                </div>
            </HomeSection>

            <HomeSection title="Why Shop With Us?">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wswu.map(ws => (
                        <WswuLayout key={ws.id} ws={ws} />
                    ))}
                </div>
            </HomeSection>
        </main>
    );
}
