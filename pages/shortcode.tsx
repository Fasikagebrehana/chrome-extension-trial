import { useRouter } from "next/router";
import { useEffect } from "react";



const shortCodePage = () => {
    const router = useRouter();
    const { shortcode } = router.query;

    useEffect(() => {
        if (shortcode && typeof shortcode === "string") {
            const urlMap = JSON.parse(localStorage.getItem("urlMap") || "{}");
            const longUrl = urlMap[shortcode]
            if (longUrl) {
                window.location.href = longUrl
            } else {
                alert("URL not found")
            }
        }
    }, [shortcode])

    return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-lg text-gray-500">Redirecting...</p>
        </div>
    );
}

export default shortCodePage;

