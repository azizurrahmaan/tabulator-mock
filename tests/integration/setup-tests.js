import mockTabulator from "./__mocks__/Tabulator.js";
import { jestPreviewConfigure } from "jest-preview";

jestPreviewConfigure({
  autoPreview: true
});

jest.mock("tabulator-tables", () => {
  return {
    ...(jest.requireActual("tabulator-tables")),
    TabulatorFull: mockTabulator
  };
});
