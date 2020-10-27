import { capitalize } from "@/filters/wordCapitalize.js";
describe("In wordCapitalize filter", () => {
  it("has make capitalize using filter", () => {
    expect(capitalize("actual")).toEqual("Actual");
  });
});
