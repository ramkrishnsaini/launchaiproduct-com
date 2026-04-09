import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "AI Product Discovery Sprint - Client Proposal";

export const size = {
  width: 1200,
  height: 675,
};

export const contentType = "image/png";

export default function TwitterImage() {
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
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 22, color: "#12a070", fontWeight: 700 }}>LaunchAIProduct.com</div>
          <div style={{ fontSize: 22, color: "#9acfc4" }}>Phase 1 - Client Proposal</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 1000 }}>
          <div style={{ fontSize: 66, lineHeight: 1.05, fontWeight: 800 }}>AI Product Discovery Sprint</div>
          <div style={{ fontSize: 28, color: "#d6f0e8", lineHeight: 1.3 }}>
            Product direction, market validation, MVP scope, and architecture in 7 days.
          </div>
        </div>

        <div style={{ fontSize: 22, color: "#d6f0e8" }}>Fixed Scope - Fixed Price - Standalone Proposal</div>
      </div>
    ),
    { ...size }
  );
}
