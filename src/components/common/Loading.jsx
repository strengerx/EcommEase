const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen space-x-4">
            <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping delay-200"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping delay-400"></div>
            </div>
        </div>
    );
};

export default Loading;
