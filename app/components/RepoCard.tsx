import Image from "next/image";
import Link from "next/link";

export default function RepoCard() {
  return (
    <Link
      href="https://github.com/VEDA0013391?tab=repositories"
      target="_blank"
      rel="noopener noreferrer"
      className="md:col-span-4 card bg-[#161b22] hover:bg-[#21262d] p-6 flex flex-col md:flex-row items-center justify-between group transition duration-300 border border-neutral-700"
    >
      <div className="flex items-center gap-5 mb-4 md:mb-0">
        <div className="bg-white/10 p-3 rounded-2xl">
          <Image
            src="/github.svg"
            alt="GitHub"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </div>

        <div>
          <h3 className="font-bold text-white text-lg leading-tight">
            GitHub Repositories
          </h3>

          <p className="text-neutral-400 text-sm">
            ソースコードや開発プロジェクト一覧
          </p>
        </div>
      </div>

      <div className="bg-white/10 px-6 py-2 rounded-xl text-sm font-bold text-white group-hover:scale-105 group-hover:bg-white group-hover:text-black transition">
        VIEW REPOS
      </div>
    </Link>
  );
}