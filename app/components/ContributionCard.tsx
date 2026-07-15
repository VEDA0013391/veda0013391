import MyImage from "@/app/components/MyImage";

export default function ContributionCard() {
  return (
    <div className="md:col-span-4 card bg-neutral-900 p-6 flex flex-col justify-center items-center">
      <div className="w-full flex justify-between items-end mb-4">
        <h3 className="font-bold text-lg text-neutral-200">
          GitHub Contributions
        </h3>

        <span className="text-xs text-neutral-500">
          Last Year
        </span>
      </div>

      <div className="w-full overflow-x-auto pb-2">
        <MyImage
          src="https://ghchart.rshah.org/a078ff/VEDA0013391"
          alt="GitHub Contributions"
          width={900}
          height={150}
          className="min-w-[700px] w-full opacity-80"
        />
      </div>
    </div>
  );
}