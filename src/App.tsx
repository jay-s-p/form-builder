import { ThemeProvider } from "@/components/theme-provider";
import FormBuilder from "./components/form-builder/FormBuilder";

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <FormBuilder />
      </ThemeProvider>
    </>
  );
};

export default App;
