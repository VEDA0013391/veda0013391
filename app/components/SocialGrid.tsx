import Image from "next/image";
import Link from "next/link";
import { socials } from "@/app/data/socials";

export default function SocialGrid() {
  return (
    <div className="md:col-span-2 md:row-span-2 grid grid-cols-3 gap-3 md:gap-4 h-full">
      {socials.map((social) => (
        <Link
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group sns-card bg-neutral-900 ${social.hover}`}
          aria-label={social.name}
        >
          <Image
            src={social.icon}
            alt={social.name}
            width={36}
            height={36}
            className="w-5 h-5 md:w-9 md:h-9 opacity-80 group-hover:opacity-100 transition"
          />
        </Link>
      ))}
    </div>
  );
}