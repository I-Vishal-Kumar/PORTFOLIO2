"use client";

function Guage({
  colors,
  id = "test",
  percentage = "80",
  start = "blue",
  stop = "green",
}) {
  const percent = percentage;
  const radius = 18;
  const strokeWidth = radius * 0.3;
  const innerRadius = radius - strokeWidth / 2;
  const circumfarance = innerRadius * 2 * Math.PI;
  const arc = circumfarance * (360 / 360);
  const dashArray = `${arc} ${circumfarance}`;
  const transform = `rotate(100, ${radius} , ${radius})`;
  const percentNormalized = Math.min(Math.max(percent, 0), 100);
  const offset = arc - (percentNormalized / 100) * arc;

  return (
    <div className="flex justify-center bg-transparent items-center">
      <svg height={radius * 2} width={radius * 2}>
        <defs>
          <linearGradient id="stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="15%" stopColor={stop} stopOpacity="1"></stop>

            <stop offset="85%" stopColor={start} stopOpacity="1"></stop>
          </linearGradient>
        </defs>
        <circle
          cx={radius}
          cy={radius}
          fill="transparent"
          r={innerRadius}
          stroke="none"
          strokeDasharray={dashArray}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          transform={transform}
          style={{
            transition: "all 1s ease-in-out",
          }}
        />
        <circle
          cx={radius}
          cy={radius}
          fill="transparent"
          r={innerRadius}
          stroke={`url(#stroke)`}
          strokeDasharray={dashArray}
          strokeDashoffset={offset}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          style={{
            transition: "all 1s ease-in-out",
          }}
          transform={transform}
        />
        ‍
      </svg>
    </div>
  );
}

export default Guage;
