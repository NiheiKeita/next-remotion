import { interpolate, useCurrentFrame } from "remotion"

export const MyComposition = () => {
  const frame = useCurrentFrame()
  const opacity = interpolate(frame, [0, 30], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })

  return (
    <h1
      style={{
        opacity,
      }}
    >
      テスト
    </h1>
  )
}