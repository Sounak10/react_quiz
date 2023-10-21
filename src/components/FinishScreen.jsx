/* eslint-disable react/prop-types */
export default function FinishScreen({
  points,
  maxPoints,
  highscore,
  dispatch,
}) {
  const percent = (points / maxPoints) * 100;

  let emoji;
  if (percent === 100) emoji = "🏆";
  if (percent >= 90 && percent < 100) emoji = "🎉";
  if (percent >= 80 && percent < 90) emoji = "👍";
  if (percent > 0 && percent < 80) emoji = "🫤";
  if (percent === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {maxPoints} ({Math.ceil(percent)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "restart" });
        }}
      >
        Restart
      </button>
    </>
  );
}
