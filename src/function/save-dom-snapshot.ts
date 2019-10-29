import { writeFileSync } from "fs";

export const saveDOMSnapshot = (outputPath: string, snapshot: string) => {
  writeFileSync(outputPath, snapshot);
};
