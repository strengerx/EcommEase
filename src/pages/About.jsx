import useMeta from "../hooks/useMeta"

const About = () => {
    const metadata = {
        title: "EcommEase - Our Story",
        description: "Learn about our mission and values shaping your shopping journey."
    }

    useMeta(metadata)

    return (<h1>Welcome to EcommEase about page</h1>)
}

export default About