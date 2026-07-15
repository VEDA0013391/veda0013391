import MyImage from "@/app/components/MyImage";

export default function ProfileCard() {
  return (
    <div className="md:col-span-2 md:row-span-2 card bg-neutral-900 flex flex-col justify-between p-6 md:p-10">
      <div>
        <div className="flex items-center gap-5 mb-4">
          <MyImage
            src="/icon.png"
            alt="Profile"
            width={96}
            height={96}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-lg object-cover"
            priority
          />

          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              りょう
            </h1>

            <p className="text-neutral-500 text-sm font-mono mt-1">
              @ryo_001339
            </p>
          </div>
        </div>

        <p className="text-neutral-400 text-sm md:text-base leading-relaxed mt-4">
          岡山で音ゲーとかプログラミングとかやってる暇人です
          <br />
          Javascriptをよく使ってます
        </p>
      </div>

      <div className="mt-6 md:mt-8 flex flex-wrap gap-2">
        <span className="tag text-orange-400 bg-orange-500/10 border-orange-500/20">
          HTML/CSS
        </span>

        <span className="tag text-yellow-300 bg-yellow-500/10 border-yellow-500/20">
          Javascript
        </span>

        <span className="tag text-orange-700 bg-orange-600/10 border-orange-600/20">
          Java
        </span>

        <span className="tag text-sky-600 bg-sky-700/10 border-sky-500/20">
          Python
        </span>
      </div>
    </div>
  );
}