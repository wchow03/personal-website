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
        "@next/next/no-img-element": "off", // Example: Disabling Next.js img rule
        // Add other rules you want to disable
    },
    },
];

export default eslintConfig;
