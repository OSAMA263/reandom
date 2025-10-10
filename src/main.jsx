import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "./components/ui/color-mode";
import Base from "./react-query/Base";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";

const queryClient = new QueryClient();

// in the provider comp
// "use client";

// import {
//   ChakraProvider,
//   createSystem,
//   defaultConfig,
//   defineConfig,
//   defineSlotRecipe,
// } from "@chakra-ui/react";
// import { ColorModeProvider } from "./color-mode";

// Example button recipe
// export const buttonRecipe = defineSlotRecipe({
//   defaultVariants: {
//     size: { base: "xs", lg: "md", xl: "lg" },
//   },
// });

// ✅ Define system config properly
// const config = defineConfig({
//   theme: {
//     semanticTokens: {
//       colors: {
//         bg: {
//           value: {
//             base: "{colors.gray.100}",   // light mode
//             _dark: "{colors.green.900}", // dark mode
//           },
//         },
//       },
//     },
//     recipes: {
//       button: buttonRecipe,
//     },
//   },
//   preflight: false, // ✅ make sure Chakra resets CSS properly
// });

export const system = createSystem(defaultConfig, config);

export function Provider({ children }) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  );
}


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>
        <QueryClientProvider client={queryClient}>
          <Router basename="/reandom">
            <Routes>
              <Route element={<App />} path="/" />
              <Route />
              <Route element={<Base />} path="/react-query" />
              <Route />
            </Routes>
          </Router>
        </QueryClientProvider>
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>
);
