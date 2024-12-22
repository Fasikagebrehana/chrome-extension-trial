document.getElementById("shorten-btn").addEventListener("click", () => {
    const longUrl = document.getElementById("long-url").value;
  
    if (!longUrl) {
      alert("Please enter a URL!");
      return;
    }
  
    const urlMap = JSON.parse(localStorage.getItem("urlMap") || "{}");
    const shortcode = Math.random().toString(36).substring(2, 8);
    urlMap[shortcode] = longUrl;
    localStorage.setItem("urlMap", JSON.stringify(urlMap));
  
    const shortUrl = `${window.location.origin}/${shortcode}`;
    document.getElementById("short-url").textContent = `Short URL: ${shortUrl}`;
  });
  