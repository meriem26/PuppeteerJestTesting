const timeout = 10000;

beforeAll(async () => {
  await page.goto(BBC, { waitUntil: "domcontentloaded" });
});

describe("Home Page title", () => {
  test(
    "Should have the title displayed",
    async () => {
      const title = await page.title();

      expect(title).toBe("BBC - Home");
    },
    timeout
  );

  test(
    "Header of the page",
    async () => {
      const h1Handle = await page.$(
        "section.hp-module.hp-banner-container > div > h2"
      );
      const html = await page.evaluate(
        h1Handle => h1Handle.innerHTML,
        h1Handle
      );
      await page.screenshot({ path: "example.png" });
      expect(html).toBe("Welcome to the BBC");
    },
    timeout
  );
});
