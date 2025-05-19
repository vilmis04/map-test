import { useState } from "react";
import { ControlPanel } from "./components/ControlPanel";
import { RenderedMap } from "./components/RenderedMap";

function App() {
  const name = useState<string>("");
  const label1 = useState<string>("");
  const label2 = useState<string>("");

  return (
    <div style={{ display: "flex", padding: "5rem" }}>
      <div
        style={{
          width: "50svw",
          height: "50svh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <RenderedMap />
        <div
          style={{
            padding: "1rem",
            display: "flex",
            gap: "2rem",
          }}
        >
          {[name, label1, label2].map(([label, setLabel], index) => {
            return (
              <label style={{ display: "flex", gap: "1rem" }}>
                {["Name", "Label 1", "Label 2"][index]}
                <input
                  type="text"
                  name={label}
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                />
              </label>
            );
          })}
        </div>
      </div>
      <div style={{ padding: "0rem 5rem" }}>
        <ControlPanel
          labels={{
            Name: name[0],
            "Label 1": label1[0],
            "Label 2": label2[0],
          }}
        />
      </div>
    </div>
  );
}

export default App;
