import "@dotlottie/player-component";
import { Cake } from "./components/happy-birthday/cake";
import { CakeActions } from "./components/happy-birthday/cake-actions";
import { Name } from "./components/happy-birthday/name";
import Joyride from "react-joyride";
import useHappyBirthdayLogic from "./components/useHappyBirthdayLogic";

function App() {
  const {
    src,
    run,
    name,
    steps,
    paused,
    playing,
    nameRef,
    audioRef,
    shareMode,
    visibility,
    sharedSteps,
    candleVisible,
    stop,
    pause,
    start,
    setRun,
    onEnded,
    setName,
    onKeyPress,
    toggleLightCandle,
    handleJoyrideCallback,
  } = useHappyBirthdayLogic();
  return (
    <div className="flex flex-col justify-between h-screen items-center">
      <Joyride
        styles={{
          options: {
            zIndex: shareMode ? 10000 : -10000,
          },
          buttonSkip: {
            outline: 0,
          },
          buttonNext: {
            outline: 0,
          },
          buttonBack: {
            outline: 0,
          },
          buttonClose: {
            outline: 0,
          },
        }}
        steps={sharedSteps}
        run={run}
        showSkipButton
        continuous
        callback={handleJoyrideCallback}
        hideBackButton
        hideCloseButton
        showProgress
        spotlightClicks
      />
      <Joyride
        styles={{
          options: {
            zIndex: !shareMode ? 10000 : -10000,
          },
          buttonSkip: {
            outline: 0,
          },
          buttonNext: {
            outline: 0,
          },
          buttonBack: {
            outline: 0,
          },
          buttonClose: {
            outline: 0,
          },
        }}
        steps={steps}
        run={run}
        showSkipButton
        continuous
        callback={handleJoyrideCallback}
        hideBackButton
        hideCloseButton
        showProgress
        spotlightClicks
      />

      <audio {...{ src, ref: audioRef, preload: "auto", onEnded }} />

      <div className="flex flex-col justify-center items-center">
        <dotlottie-player
          src="/assets/hbd.lottie"
          autoplay
          loop
          style={{
            zIndex: 20,
            visibility: visibility ? "visible" : "hidden",
            width: 400,
          }}
        />

        <Name
          {...{
            ref: nameRef,
            name,
            setName,
            shareMode,
            playing,
            run,
            onKeyPress,
          }}
        />
      </div>

      <div className="relative flex justify-center">
        <Cake {...{ candleVisible }} />

        <div className="absolute">
          <dotlottie-player
            src="/assets/confetti.lottie"
            autoplay
            loop
            style={{
              zIndex: 30,
              visibility: visibility ? "visible" : "hidden",
              width: 400,
            }}
          />
        </div>
      </div>

      <CakeActions
        {...{
          run,
          start,
          pause,
          stop,
          toggleLightCandle,
          setRun,
          playing,
          paused,
          candleVisible,
        }}
      />

      {/* <div
        style={{
          position: "absolute",
          bottom: "0%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "non",
        }}
      >
        {version}
      </div> */}
    </div>
  );
}

export default App;
