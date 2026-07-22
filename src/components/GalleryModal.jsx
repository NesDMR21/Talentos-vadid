import { useEffect, useState, useCallback } from "react";

export default function GalleryModal({ album, onClose }) {
  const [currentImage, setCurrentImage] = useState(0);

  // Reiniciar al cambiar de álbum (evita que la posición “se herede”)
  const albumKey = album?.id ?? "none";

  useEffect(() => {
    setCurrentImage(0);
  }, [albumKey]);


  const nextImage = useCallback(() => {
    if (!album?.images?.length) return;
    setCurrentImage((prev) =>
      prev === album.images.length - 1 ? 0 : prev + 1
    );
  }, [album]);

  const previousImage = useCallback(() => {
    if (!album?.images?.length) return;
    setCurrentImage((prev) =>
      prev === 0 ? album.images.length - 1 : prev - 1
    );
  }, [album]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") previousImage();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [nextImage, previousImage, onClose]);

  if (!album) return null;

  return (
    <div className="gallery-modal" onClick={onClose}>
      <div
        className="gallery-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-gallery" onClick={onClose}>
          ✕
        </button>

        <h2>{album.title}</h2>

        <button className="gallery-prev" onClick={previousImage}>
          ❮
        </button>

        <img
          src={album.images[currentImage]}
          alt={album.title}
          className="gallery-main-image"
        />

        <button className="gallery-next" onClick={nextImage}>
          ❯
        </button>

        <div className="gallery-counter">
          {currentImage + 1} / {album.images.length}
        </div>

        <div className="gallery-thumbnails">
          {album.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Miniatura"
              className={
                currentImage === index ? "active" : ""
              }
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

