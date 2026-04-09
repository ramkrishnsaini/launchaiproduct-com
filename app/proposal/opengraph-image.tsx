import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "AI Product Discovery Sprint - Client Proposal";

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
          justifyContent: "space-between",
          backgroundColor: "#0d1b2a",
          backgroundImage:
            "radial-gradient(circle at 95% 10%, rgba(18, 160, 112, 0.2), transparent 36%), linear-gradient(160deg, #0d1b2a 0%, #0a5c46 100%)",
          padding: "56px 72px",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 24,
              color: "#12a070",
              fontWeight: 700,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                backgroundColor: "#12a070",
              }}
            />
            LaunchAIProduct.com
          </div>
          <div style={{ fontSize: 24, color: "#9acfc4" }}>Phase 1 Project Proposal</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 980 }}>
          <div style={{ fontSize: 68, lineHeight: 1.05, fontWeight: 800 }}>AI Product Discovery Sprint</div>
          <div style={{ fontSize: 30, color: "#d6f0e8", lineHeight: 1.3 }}>
            7-day fixed-scope strategy to define product direction, validation, MVP scope, and architecture.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            fontSize: 22,
            color: "#d6f0e8",
          }}
        >
          <div
            style={{
              backgroundColor: "#0f7a5a",
              padding: "10px 14px",
              borderRadius: 8,
            }}
          >
            Strategy and Direction
          </div>
          <div
            style={{
              backgroundColor: "#12a070",
              padding: "10px 14px",
              borderRadius: 8,
            }}
          >
            7 Days Fixed Price
          </div>
          <div
            style={{
              backgroundColor: "#0a5c46",
              padding: "10px 14px",
              borderRadius: 8,
            }}
          >
            No Code No Build
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
