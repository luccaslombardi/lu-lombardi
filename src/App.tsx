import { Header } from "./components/Header";
import { Widget } from "./components/Widget";
import { Profile } from "./pages/Index";

export function App() {
  return (
    <>
      <Header />
      <div className="flex h-screen">
        <Profile />
      </div>
      <Widget />
    </>
  );
}
