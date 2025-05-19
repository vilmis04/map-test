import { ChangeEvent, useEffect, useRef, useState } from "react";
interface SelectedFile {
  file: File | null;
  previewUrl: string | null;
}

export function ControlPanel({ labels }: { labels: Record<string, string> }) {
  const [file, setFile] = useState<SelectedFile>({
    file: null,
    previewUrl: null,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile({
        file: file,
        previewUrl: URL.createObjectURL(file),
      });
    } else {
      setFile({
        file: null,
        previewUrl: null,
      });
    }
  };

  useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Control Panel</h2>
      <label>
        File import:{" "}
        <input
          type="file"
          onChange={handleFileChange}
          ref={fileInputRef} // Attach the ref
        />
      </label>
      {Object.entries(labels).map(([title, value]) => (
        <div>
          <strong>{title}:</strong> {value}
        </div>
      ))}
    </div>
  );
}
