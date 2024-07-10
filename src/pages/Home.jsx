import { Link } from "react-router-dom";
import Loading from "../components/common/Loading";
import useFetch from "../hooks/useFetch";
import useMeta from "../hooks/useMeta";

const Home = () => {
    const metadata = {
        title: "EcommEase - Your Ultimate Shopping Destination",
        description:
            "Discover featured products and latest deals for seamless shopping experience.",
    };
    useMeta(metadata);

    const { data, loading } = useFetch("/products?offset=0&limit=6");

    return (
        <main className="max-w-7xl mx-auto p-4">
            <section className="my-8">
                <h2 className="text-4xl font-bold text-slate-800 text-center mb-4">
                    Welcome to EcommEase
                </h2>
                <p className="text-slate-800 text-center mb-8">
                    Discover the best products at unbeatable prices. Shop now and enjoy a
                    seamless shopping experience.
                </p>
                <div className="flex justify-center">
                    <a
                        href="/shop"
                        className="bg-slate-800 text-white py-2 px-4 rounded"
                    >
                        Shop Now
                    </a>
                </div>
            </section>

            <section className="my-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                    Featured Products
                </h2>
                {loading ? (
                    <Loading />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data && data.length > 0 ? (
                            data.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-slate-200 rounded-lg shadow-lg"
                                >
                                    <img
                                        src={product.images[0]}
                                        alt={product.title}
                                        className="w-full h-48 object-cover rounded-t-lg"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg text-blue-500 font-medium">
                                            <Link to={`/products/${product?.id}`}>
                                                {product.title}
                                            </Link>
                                        </h3>
                                        <p className="text-slate-800 text-lg mt-1">
                                            &#8377; {product.price}
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>not found</p>
                        )}
                    </div>
                )}
            </section>

            <section className="my-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                    Why Shop With Us?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-slate-200 p-4 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                            Quality Products
                        </h3>
                        <p className="text-slate-800">
                            We ensure the highest quality standards for all our products.
                        </p>
                    </div>
                    <div className="bg-slate-200 p-4 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                            Affordable Prices
                        </h3>
                        <p className="text-slate-800">
                            Get the best deals and value for your money.
                        </p>
                    </div>
                    <div className="bg-slate-200 p-4 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                            Fast Shipping
                        </h3>
                        <p className="text-slate-800">
                            Enjoy quick and reliable delivery to your doorstep.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
