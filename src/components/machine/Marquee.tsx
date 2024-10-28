export function Marquee() {
  return (
    <div className="overflow-hidden rounded whitespace-nowrap bg-black py-2">
      <p
        className="inline-block animate-marquee text-lg font-semibold text-lime-300"
        style={{
          textShadow: "0 0 5px #a3f703, 0 0 5px #a3f703",
        }}
      >
        ONLY ACCEPT MONEY IN DENOMINATIONS OF 2000, 5000, 10000, 20000, 50000
      </p>
    </div>
  );
}
