import { useState } from "react";

// const urlMap : Record<string, string> = {}

const HomePage = () => {
    const [longUrl, setLongUrl] = useState("")
    const [shortUrl, setShortUrl] = useState("")

    const generateUrl = () => {
        const urlMap = JSON.parse(localStorage.getItem("urlMap") || "{}");
        const shortcode = Math.random().toString(36).substring(2, 8)
        urlMap[shortcode] = longUrl
        localStorage.setItem("urlMap", JSON.stringify(urlMap));
        setShortUrl(`${window.location.origin}/${shortcode}`)
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">URL Shortener</h1>
            <div className="flex flex-col items-center space-y-4"></div>
            <input
                className="px-4 py-2 border rounded-lg shadow-md w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Enter your URL"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
            ></input>
            <button
                onClick={generateUrl}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                disabled={!longUrl}
                >
                Shorten URL
            </button>
            {shortUrl && (
          <p>
            Your short URL:{" "}
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {shortUrl}
            </a>
          </p>
    )}
        </div>
    )




}
export default HomePage;