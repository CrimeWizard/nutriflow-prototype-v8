interface FoodImageProps {
  src: string | null;
  fallback: string;
  alt: string;
  className?: string;
}

export function FoodImage({ src, fallback, alt, className = '' }: FoodImageProps) {
  if (!src) {
    return <span className={`food-image-fallback ${className}`} aria-hidden="true">{fallback}</span>;
  }
  return (
    <img
      src={src}
      alt={alt}
      className={`food-image ${className}`}
      loading="lazy"
      onError={(e) => {
        const img = e.currentTarget;
        img.style.display = 'none';
        const span = document.createElement('span');
        span.className = `food-image-fallback ${className}`;
        span.textContent = fallback;
        span.setAttribute('aria-hidden', 'true');
        img.parentNode?.replaceChild(span, img);
      }}
    />
  );
}
