document.addEventListener("DOMContentLoaded", () => {
  const thumbnail = document.querySelectorAll(".thumbnail");
  const largeImageDisplay = document.getElementById("large-image-display");

  const originalText = "Hover over or focus on an image below to see details.";

  thumbnail.forEach((img) => {
    // Add tabindex with JavaScript
    img.setAttribute("tabindex", "0");

    const altText = img.getAttribute("alt");
    const bgImage = img.getAttribute("src");

    const showImageInfo = () => {
      largeImageDisplay.textContent = altText;
      largeImageDisplay.style.backgroundImage = `url(${bgImage})`;
    };

    const resetImageInfo = () => {
      largeImageDisplay.textContent = originalText;
      largeImageDisplay.style.backgroundImage = `url('')`;
    };

    img.addEventListener("mouseover", showImageInfo);
    img.addEventListener("focus", showImageInfo);

    img.addEventListener("mouseout", resetImageInfo);
    img.addEventListener("blur", resetImageInfo);
  });
});
