// Tests SSR pour @omichalo/sqyping-mui-theme
import { renderToString } from "react-dom/server";
import { ssrTheme, SSRThemeProvider, useSSRColorMode } from "../src/ssr";

// Mock de l'environnement SSR
const originalWindow = global.window;
const originalProcess = global.process;

beforeAll(() => {
  // Simuler l'environnement SSR
  delete (global as any).window;
  global.process = {
    env: { NODE_ENV: "production" },
    versions: { node: "18.0.0" },
  } as any;
});

afterAll(() => {
  // Restaurer l'environnement
  global.window = originalWindow;
  global.process = originalProcess;
});

describe("SSR Compatibility", () => {
  test("should render without SSR errors", () => {
    const html = renderToString(
      <SSRThemeProvider>
        <div>Test SSR</div>
      </SSRThemeProvider>
    );
    expect(html).toContain("Test SSR");
  });

  test("should provide SSR theme", () => {
    expect(ssrTheme).toBeDefined();
    expect(ssrTheme.palette.mode).toBe("light");
    expect(ssrTheme.palette.primary.main).toBe("#28306d");
  });

  test("should provide SSR color mode hook", () => {
    const colorMode = useSSRColorMode();
    expect(colorMode.mode).toBe("light");
    expect(typeof colorMode.toggleColorMode).toBe("function");
    expect(typeof colorMode.setColorMode).toBe("function");
  });

  test("should render SSR components without errors", () => {
    const {
      SSRHighlight,
      SSRHighlightH1,
      SSRHighlightTitle,
    } = require("../src/ssr");

    const highlightHtml = renderToString(
      <SSRHighlight>Test Highlight</SSRHighlight>
    );
    expect(highlightHtml).toContain("Test Highlight");

    const h1Html = renderToString(<SSRHighlightH1>Test H1</SSRHighlightH1>);
    expect(h1Html).toContain("Test H1");

    const titleHtml = renderToString(
      <SSRHighlightTitle>Test Title</SSRHighlightTitle>
    );
    expect(titleHtml).toContain("Test Title");
  });
});


