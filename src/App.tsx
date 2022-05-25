import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Widget } from "./components/Widget";
import { FirstBlock } from "./pages/FirstBlock";
import { SecondBlock } from "./pages/SecondBlock";
import { ThirdBlock } from "./pages/ThirdBlock";

export function App() {
  return (
    <>
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <Widget />
    </>
  );
}
