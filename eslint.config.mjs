import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

    // Add overrides here
    {
    files: ["**/*.{js,ts,jsx,tsx}"], // Apply to all files
    rules: {
        "@typescript-eslint/no-explicit-any": "off",  // disable explicit any warning
        "no-unused-vars": "off",                      // disable unused vars warning
    },
    },
];

export default eslintConfig;
