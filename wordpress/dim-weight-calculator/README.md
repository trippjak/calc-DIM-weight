# Dimensional Weight Calculator WordPress Plugin

This plugin adds a dimensional weight calculator to your WordPress site that helps users calculate shipping costs based on package dimensions and weight.

## Installation

1. Upload the `dim-weight-calculator` folder to your `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Use the shortcode `[dim_weight_calculator]` to embed the calculator in any post or page

## Usage

Simply add the shortcode `[dim_weight_calculator]` to any post, page, or widget area where you want the calculator to appear.

Example:
```
[dim_weight_calculator]
```

## Development

To work on the plugin locally:

1. Install dependencies:
```bash
npm install
```

2. Start development build with watch mode:
```bash
npm run dev
```

3. For production build:
```bash
npm run build
```

## Requirements

- WordPress 5.0 or higher
- PHP 7.4 or higher