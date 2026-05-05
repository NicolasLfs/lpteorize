import Image from "next/image";

type LpScreenshotProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
};

export function LpScreenshot({
  src,
  alt,
  caption,
  className = "",
  priority = false,
}: LpScreenshotProps) {
  return (
    <figure className={className}>
      <div className="relative overflow-hidden rounded-2xl border border-[#222] bg-[#111] shadow-[0_0_80px_-20px_rgba(255,106,0,0.35)]">
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={935}
          className="h-auto w-full"
          sizes="(max-width: 1024px) 100vw, 1152px"
          priority={priority}
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center text-sm font-medium text-[#a0a0a0]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
