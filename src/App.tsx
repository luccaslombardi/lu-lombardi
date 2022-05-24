import { Header } from "./components/Header";
import { Widget } from "./components/Widget";
import { FirstBlock } from "./pages/FirstBlock";
import { SecondBlock } from "./pages/SecondBlock";

export function App() {
  return (
    <>
      <Header />
      <div className="flex h-screen w-screen  justify-center backdrop-blur-sm ">
        <FirstBlock />
      </div>
      <SecondBlock />
      <Widget />
    </>
  );
}
