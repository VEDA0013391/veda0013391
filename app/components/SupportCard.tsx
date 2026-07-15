import MyImage from "@/app/components/MyImage";
import Link from "next/link";

export default function SupportCard() {
  return (
    <Link
      href="https://discord.gg/Sz3Sh2ZqEy"
      target="_blank"
      rel="noopener noreferrer"
      className="md:col-span-4 card bg-[#5865F2] hover:bg-[#4752c4] p-6 flex flex-col md:flex-row items-center justify-between group transition duration-300 border-none"
    >
      <div className="flex items-center gap-5 mb-4 md:mb-0">
        <MyImage
          src="/server-icon.png"
          alt="Server Icon"
          width={56}
          height={56}
          className="w-14 h-14 rounded-2xl shadow-md border-2 border-white/20 group-hover:scale-105 transition object-cover"
        />

        <div>
          <h3 className="font-bold text-white text-lg leading-tight">
            サポートサーバー
          </h3>

          <p className="text-white/80 text-sm">
            Bot &amp; Project Support
          </p>
        </div>
      </div>

      <div className="bg-white/20 px-6 py-2 rounded-xl text-sm font-bold text-white group-hover:scale-105 group-hover:bg-white group-hover:text-[#5865F2] transition">
        JOIN SERVER
      </div>
    </Link>
  );
}