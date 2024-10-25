import { Fragment, MouseEventHandler, useCallback } from "react";
import {
  TbPlayerPlayFilled,
  TbPlayerPauseFilled,
  TbPlayerStopFilled,
  TbInfoCircleFilled,
  TbFlame,
  TbFlameOff,
  TbShare3,
} from "react-icons/tb";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const buttonStyles =
  "text-white opacity-90 border-0 flex justify-center items-center bg-black p-2 rounded-lg";

export const CakeActions = ({
  run,
  start,
  pause,
  stop,
  toggleLightCandle,
  setRun,
  playing,
  paused,
  candleVisible,
}: any) => {
  const guide = useCallback(() => setRun(true), [setRun]);

  const renderButton = (
    id: string,
    onClick: MouseEventHandler<HTMLButtonElement> | undefined,
    Icon: React.ElementType,
    disabled = false
  ) => (
    <button
      id={id}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon />
    </button>
  );

  const actionButtons = useCallback(
    () => (
      <Fragment>
        {!playing || paused
          ? renderButton("start", start, TbPlayerPlayFilled)
          : null}
        {playing && !paused
          ? renderButton("pause", pause, TbPlayerPauseFilled)
          : null}
        {playing ? renderButton("stop", stop, TbPlayerStopFilled) : null}
        {renderButton(
          "toggle-candle",
          toggleLightCandle,
          candleVisible ? TbFlameOff : TbFlame
        )}
        {!playing
          ? renderButton("user-guide", guide, TbInfoCircleFilled)
          : null}
        <CopyToClipboard
          text={[window.location.href, "shared=true"].join("&")}
          onCopy={() => toast("Copied to clipboard!")}
        >
          {renderButton("share", undefined, TbShare3)}
        </CopyToClipboard>
      </Fragment>
    ),
    [
      candleVisible,
      guide,
      pause,
      paused,
      playing,
      start,
      stop,
      toggleLightCandle,
    ]
  );

  const guideActions = useCallback(
    () => (
      <Fragment>
        {["start", "pause", "stop", "toggle-candle"].map((id, idx) =>
          renderButton(
            id,
            [start, pause, stop, toggleLightCandle][idx],
            [
              TbPlayerPlayFilled,
              TbPlayerPauseFilled,
              TbPlayerStopFilled,
              candleVisible ? TbFlameOff : TbFlame,
            ][idx],
            run
          )
        )}
        {renderButton("share", undefined, TbShare3)}
      </Fragment>
    ),
    [candleVisible, pause, run, start, stop, toggleLightCandle]
  );

  return (
    <div className="flex gap-4 mb-10">
      {run ? guideActions() : actionButtons()}
    </div>
  );
};
