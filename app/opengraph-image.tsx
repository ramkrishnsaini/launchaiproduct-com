import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt =
  "Build Real AI Products with Deep AI Architecture — AI strategy, RAG, agentic systems, inference, owned infrastructure";

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
            fontSize: 52,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.12,
            maxWidth: 980,
          }}
        >
          Build Real AI Products with Deep AI Architecture
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 24,
            color: "#a1a1aa",
            maxWidth: 920,
            lineHeight: 1.45,
          }}
        >
          AI product strategy, architecture, RAG, agentic systems, inference, orchestration, memory,
          and build support for professionals shipping real AI products.
        </div>
      </div>
    ),
    { ...size }
  );
}
