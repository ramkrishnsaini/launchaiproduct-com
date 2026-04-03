import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "LaunchAIProduct.com — AI product strategy + product build & delivery";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#030f0f",
          backgroundImage:
            "linear-gradient(135deg, rgba(3, 98, 76, 0.5) 0%, #030f0f 55%)",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              backgroundColor: "#00df82",
            }}
          />
          <span style={{ color: "#00df82", fontSize: 24, fontWeight: 600 }}>
            LaunchAIProduct.com
          </span>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Idea → architecture → build → real product
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 26,
            color: "#a1a1aa",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          AI product strategy + product build & delivery. Not wrappers. Not generic automation.
        </div>
      </div>
    ),
    { ...size }
  );
}
