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
  test(
    "More top stories",
    async () => {
      const moreTopStories = await page.$(".top-stories__title-text__inner");
      const html = await page.evaluate(
        moreTopStories => moreTopStories.innerHTML,
        moreTopStories
      );
      expect(html).toBe("More top stories");
    },
    timeout
  );
  test(
    "Top stories Promos",
    async () => {
      const topStoriesPromos = await page.$$(
        "section:nth-child(3) > div > div > div > div"
      );

      expect(topStoriesPromos.length).toEqual(3);
    },
    timeout
  );
});
