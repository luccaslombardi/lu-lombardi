import { Header } from "./components/Header";
import { Widget } from "./components/Widget";
import { FirstBlock } from "./pages/FirstBlock";
import { SecondBlock } from "./pages/SecondBlock";

export function App() {
  return (
    <>
      <Header />
      <div className="flex h-screen w-screen bg-opacity-20 bg-indigo-900  backdrop-blur-sm backdrop-brightness-50">
        <FirstBlock />
      </div>
      <SecondBlock />
      <Widget />
    </>
  );
}
