import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import noInlineStyles from "eslint-plugin-no-inline-styles";


const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: {
      "no-inline-styles": noInlineStyles,
    },
    rules: {
      "no-inline-styles/no-inline-styles": "error",
      "no-restricted-syntax": [
        "error",
        {
          "selector": "JSXAttribute[name.name='sx'] Literal[value=/^#|^rgb|^hsl|^[0-9]+px$/]",
          "message": "❌ Do not use hardcoded colors or pixel values in sx prop. Use theme tokens (palette, spacing, etc.)."
        },
        {
          "selector": "JSXAttribute[name.name='sx'] > JSXExpressionContainer > ObjectExpression > Property[key.name=/^(width|height|padding|margin|top|right|bottom|left)/] > Literal[value=/[0-9]{3,}/]",
          "message": "❌ Large hardcoded numeric value detected in sx prop. Consider using theme.spacing() or layout tokens."
        }
      ]
    },
  },
]);

export default eslintConfig;
