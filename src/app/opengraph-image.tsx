import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const runtime = "edge";
export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#f7f0e6",
          color: "#1d2b1f",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#bfea4b",
              color: "#1d2b1f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            30
          </div>
          <span style={{ fontSize: "20px", color: "#3d5c40" }}>
            Langdock Use Cases
          </span>
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          30 Days. 30 Langdock Use Cases.
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#6b7a6d",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Practical AI workflow automation for real business problems.
        </div>
        <div
          style={{
            marginTop: "48px",
            display: "flex",
            gap: "12px",
          }}
        >
          {["Trigger", "Extract", "Validate", "Enrich", "Decide", "Act", "Log"].map(
            (step) => (
              <div
                key={step}
                style={{
                  padding: "8px 16px",
                  borderRadius: "999px",
                  border: "2px solid #1d2b1f",
                  backgroundColor: "#e4f4c8",
                  fontSize: "14px",
                  color: "#1d2b1f",
                }}
              >
                {step}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
