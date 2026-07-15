import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  language: string;
  image: string;
  href: string;
};

export default function ProjectCard({
  title,
  description,
  language,
  image,
  href,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="md:col-span-2 group card relative h-64 overflow-hidden bg-neutral-900"
    >
      {/* 背景画像 */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="w-full h-full object-cover opacity-60 transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* テキスト */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <h3 className="text-2xl font-bold text-white mb-1 transition-transform group-hover:translate-x-2">
          {title}
        </h3>

        <p className="text-neutral-400 text-sm">
          {description}
        </p>

        <p className="text-neutral-400 text-sm mt-1">
          {language}
        </p>
      </div>
    </Link>
  );
}