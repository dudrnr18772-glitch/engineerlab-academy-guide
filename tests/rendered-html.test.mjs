import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;
const canonicalDomain =
  /<link(?=[^>]*\brel=["']canonical["'])(?=[^>]*\bhref=["']https:\/\/engineerlab-academy-guide\.vercel\.app\/?["'])[^>]*>/i;

const verificationTags = [
  [
    "naver-site-verification",
    "f6f60e3bbd0f0dad5d3daca711afacf1bf0d6a9e",
  ],
  [
    "google-site-verification",
    "838eo6Gckysvid4iFBUIV3zZJf-CuVtXBw9dNaj20JE",
  ],
  ["msvalidate.01", "7CC2274F4DAA4C8A93EB5F4D8259E6A3"],
];

function metaTag(name, content) {
  return new RegExp(
    `<meta(?=[^>]*\\bname=["']${name.replace(".", "\\.")}["'])(?=[^>]*\\bcontent=["']${content}["'])[^>]*>`,
    "i",
  );
}

test("renders deployment and search verification metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, developmentPreviewMeta);
  assert.match(html, canonicalDomain);
  for (const [name, content] of verificationTags) {
    assert.match(html, metaTag(name, content));
  }
});
