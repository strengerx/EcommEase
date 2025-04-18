export default function HomeSection({ children, title = "section title", center = false }) {
    return (<section className={`my-8 ${center && "text-center"}`}>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
            {title}
        </h2>
        {children}
    </section>)
}
