import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// The logo is white on transparent, so place it on a dark tile to stay visible in light browser tabs.
export default async function Icon() {
  const logo = await readFile(join(process.cwd(), "public/images/logo.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14110f",
          borderRadius: 14,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={50} height={52} alt="" />
      </div>
    ),
    size,
  );
}
