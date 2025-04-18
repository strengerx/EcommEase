import { useEffect } from "react";

export default function useMeta({ title, description }) {
    useEffect(() => {
        if (title) {
            document.title = title;
        }

        if (description) {
            let metaDescription = document.querySelector('meta[name="description"]');
            if (!metaDescription) {
                metaDescription = document.createElement("meta");
                metaDescription.name = "description";
                document.head.appendChild(metaDescription);
            }
            metaDescription.content = description;
        }
    }, [title, description]);
}
