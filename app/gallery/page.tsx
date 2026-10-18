import Image from "next/image";
import GalleryHero from "@/components/GalleryHero";

const galleryImages = [
  {
    src: "/images/work_process_images/01-share-your-requirements.png",
    alt: "Project requirements and consultation",
  },
  {
    src: "/images/work_process_images/02-get-a-quote.png",
    alt: "Project quotation and engineering planning",
  },
  {
    src: "/images/work_process_images/03-production.png",
    alt: "Precision manufacturing and production",
  },
  {
    src: "/images/work_process_images/04-delivery.png",
    alt: "Finished project and delivery",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <GalleryHero />

      <section aria-label="Project gallery" className="bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 opacity-0 animate-gallery-image"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes gallery-image-enter {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-gallery-image {
          animation: gallery-image-enter 650ms ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-gallery-image {
            animation: none;
            opacity: 1;
          }
          .group img { transition: none; }
        }
      `}</style>
    </main>
  );
}
