// Tests Client pour @omichalo/sqyping-mui-theme
import { render } from "@testing-library/react";
import {
  AppThemeProvider,
  useColorMode,
} from "../src/providers/AppThemeProvider";
import { Highlight } from "../src/components/Highlight";

// Mock de l'environnement Client
const originalWindow = global.window;
const originalProcess = global.process;

beforeAll(() => {
  // Simuler l'environnement Client
  global.window = {
    localStorage: {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
    },
  } as any;
  global.process = {
    env: { NODE_ENV: "development" },
    versions: { node: "18.0.0" },
  } as any;
});

afterAll(() => {
  // Restaurer l'environnement
  global.window = originalWindow;
  global.process = originalProcess;
});

describe("Client Compatibility", () => {
  test("should render on client side", () => {
    const { container } = render(
      <AppThemeProvider>
        <div>Test Client</div>
      </AppThemeProvider>
    );
    expect(container).toBeInTheDocument();
  });

  test("should provide color mode context", () => {
    const TestComponent = () => {
      const { mode, toggleColorMode } = useColorMode();
      return (
        <div>
          <span data-testid="mode">{mode}</span>
          <button onClick={toggleColorMode}>Toggle</button>
        </div>
      );
    };

    const { getByTestId } = render(
      <AppThemeProvider>
        <TestComponent />
      </AppThemeProvider>
    );

    expect(getByTestId("mode")).toHaveTextContent("light");
  });

  test("should render Highlight component", () => {
    const { container } = render(
      <AppThemeProvider>
        <Highlight variant="h1">Test Highlight</Highlight>
      </AppThemeProvider>
    );
    expect(container).toHaveTextContent("Test Highlight");
  });

  test("should handle theme switching", () => {
    const TestComponent = () => {
      const { mode, toggleColorMode } = useColorMode();
      return (
        <div>
          <span data-testid="mode">{mode}</span>
          <button onClick={toggleColorMode}>Toggle</button>
        </div>
      );
    };

    const { getByTestId, getByText } = render(
      <AppThemeProvider>
        <TestComponent />
      </AppThemeProvider>
    );

    expect(getByTestId("mode")).toHaveTextContent("light");

    // Simuler le clic sur le bouton toggle
    getByText("Toggle").click();
    expect(getByTestId("mode")).toHaveTextContent("dark");
  });
});

