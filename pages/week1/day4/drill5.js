import DrillTemplate from '../../../components/DrillTemplate';

export default function SeatedBreathWithRibControl() {
  return (
    <DrillTemplate
      title="Drill 5: Seated Breath with Rib Control"
      backButtonText="Week 1 - Day 4"
      videoId="wn0IyvGBeUI"
      videoStart={2248}
      setup={[
        "Sit upright on a firm chair, feet flat.",
        "Hands gently resting on your ribs."
      ]}
      instructions={[
        "Inhale into the lower ribs and belly.",
        "Exhale fully, feeling the ribs drop back.",
        "Maintain a neutral pelvis throughout."
      ]}
      setsReps={[
        "Sets: 2",
        "Reps: 5–8 breath cycles per set",
        "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
        "Rest: Between sets or as needed"
      ]}
      whatToFeel={[
        "Expansion and contraction of the lower ribs",
        "Smooth, relaxed breathing"
      ]}
      whatToAvoid={[
        "Overextending or collapsing posture"
      ]}
      redFlags={[
        "Difficulty maintaining control"
      ]}
      regression={[
        "Place a pillow behind the lower back for support."
      ]}
    />
  );
}
