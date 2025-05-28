import { ChangeEvent, useRef, useState } from "react";
interface SelectedFile {
  file: string | null;
  previewUrl: string | null;
}

export function ControlPanel({
  labels,
  uploadFile,
}: {
  labels: Record<string, string>;
  uploadFile: (file: string) => void;
}) {
  const [file, setFile] = useState<SelectedFile>({
    file: null,
    previewUrl: null,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const resetFile = () => {
    setFile({
      file: null,
      previewUrl: null,
    });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      file.text().then((content) => {
        setFile({
          file: content,
          previewUrl: URL.createObjectURL(file),
        });
      });
    } else {
      resetFile();
    }
  };

  const updateMap = () => {
    if (!file.file) return;
    uploadFile(file.file);
    resetFile();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Control Panel</h2>
      <label>
        File import:
        <input
          type="file"
          onChange={handleFileChange}
          ref={fileInputRef} // Attach the ref
        />
      </label>
      <button onClick={updateMap} style={{ display: "inline" }}>
        Upload
      </button>
      {Object.entries(labels).map(([title, value]) => (
        <div>
          <strong>{title}:</strong> {value}
        </div>
      ))}
    </div>
  );
}
