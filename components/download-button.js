import React, { useState, useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";

function DownloadLink({ imageName, downloadText = "Download", ...props }) {
  const [downloadUrl, setDownloadUrl] = useState("");
  const { colorMode } = useColorMode();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageUrl = `/images/certificates/${imageName}`;
        const response = await fetch(imageUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const blob = await response.blob();
        const imageBlob = new Blob([blob], { type: "image/avif" });
        const newUrl = window.URL.createObjectURL(imageBlob);
        setDownloadUrl(newUrl);
      } catch (e) {
        console.log(`Fetch error: ${e.message}`);
      }
    };

    fetchImage();

    return () => {
      if (downloadUrl) {
        window.URL.revokeObjectURL(downloadUrl);
      }
    };
  }, [imageName, downloadUrl]);

  const linkStyle = {
    color: colorMode === "light" ? "#3d7aed" : "#ff63c3",
    textUnderlineOffset: "3px",
    cursor: "pointer",
  };

  return (
    <a href={downloadUrl} download={imageName} style={linkStyle}>
      {downloadText}
    </a>
  );
}

export default DownloadLink;
