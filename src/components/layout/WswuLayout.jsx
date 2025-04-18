export default function WswuLayout({ ws }) {
    return (<div className="bg-slate-200 p-4 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-slate-800 mb-2">
            {ws.title}
        </h3>
        <p className="text-slate-800">
            {ws.content}
        </p>
    </div>)
}
