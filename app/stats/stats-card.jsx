const StatsCard = ({ title, amount, unit = "" }) => {
  return (
    <div className="flex h-[160px] w-[236px] flex-shrink-0 flex-col justify-center rounded-xl bg-white bg-opacity-15 px-6 text-background">
      <div className="mb-3 text-sm font-bold">{title}</div>
      <h2 className="whitespace-nowrap text-5xl font-bold leading-[58px]">
        {amount}
        {unit && <span className="text-2xl">{unit}</span>}
      </h2>
    </div>
  );
};

export default StatsCard;
