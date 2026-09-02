import Image from "next/image";

type StripPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

type Props = {
  photos: StripPhoto[];
};

export function PhotoStrip({ photos }: Props) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3">
      {photos.map((photo) => (
        <div key={photo.src} className="group relative aspect-[4/3] overflow-hidden sm:aspect-[3/4] lg:aspect-[16/10]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
          {photo.caption && (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-nrs-hero/80 to-transparent px-4 py-4">
              <p className="text-sm font-medium text-white">{photo.caption}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
