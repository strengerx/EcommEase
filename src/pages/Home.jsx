import useMeta from '../hooks/useMeta'

const Home = () => {
    const metadata = {
        title: "EcommEase - Your Ultimate Shopping Destination",
        description: "Discover featured products and latest deals for seamless shopping experience."
    }
    useMeta(metadata)

    return (<main className="w-full px-16 bg-slate-100">
        <h1 className="text-4xl font-bold text-center text-blue-800">Welcome to EcommEase!</h1>
    </main>)
}

export default Home