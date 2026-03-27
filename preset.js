/**
 * Cendyn Product Design System — Tailwind preset
 * Theme tokens synced from Figma (Cendyn-Product-Design-System).
 * Usage: presets: [require('cendyn-design-system')] in tailwind.config.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        // From Figma: color/primary/*
        // Note: Use primary (DEFAULT) for main primary color; primary-600 does not exist.
        primary: {
          DEFAULT: '#276ecd', // primary-100
          10: '#e9f1fa',
          40: '#a9c5eb',
          100: '#276ecd',
          120: '#1F58A4',
          140: '#17427b',
        },
        // From Figma: color/neutrals/*
        neutrals: {
          black: '#12263f',
          white: '#ffffff',
          'gray-50': '#FCFDFE',
          'gray-100': '#f9fbfd',
          'gray-200': '#EDF2F9',
          'gray-300': '#e4ebf6',
          'gray-400': '#d2ddec',
          'gray-500': '#B1C2D9',
          'gray-600': '#95AAC9',
          'gray-700': '#6e84a3',
          'gray-800': '#3B516C',
          'gray-900': '#283E59',
          'gray-900-dark': '#132A46'
        },
        // From Figma: color/informative/success/*
        success: {
          DEFAULT: '#008a50',
          light: '#e6f7f0',
          dark: '#005330',
          10: '#e6f7f0',
          40: '#8accb0',
          100: '#008a50',
          140: '#005330',
        },
        // From Figma: color/informative/danger/*
        error: {
          DEFAULT: '#b82c45',
          light: '#f8eaec',
          dark: '#6e1a29',
          10: '#f8eaec',
          40: '#de9ea9',
          100: '#b82c45',
          140: '#6e1a29',
        },
        // From Figma: color/informative/warning/*
        warning: {
          DEFAULT: '#dcaf3c',
          light: '#fcf7ec',
          dark: '#846924',
          10: '#fcf7ec',
          40: '#efdaa6',
          100: '#dcaf3c',
          120: '#b08c30',
          140: '#846924',
        },
        // From Figma: color/informative/info/*
        info: {
          DEFAULT: '#38808a',
          light: '#ebf2f3',
          dark: '#224d53',
          10: '#ebf2f3',
          40: '#afccd0',
          100: '#38808a',
          140: '#224d53',
        },
      },
      spacing: {
        // space-x (x in px, values in rem): 0,4,8,12,16,20,24,28,32,36,40
        'space-0': '0',
        'space-4': '0.25rem',   // 4px
        'space-8': '0.5rem',    // 8px
        'space-12': '0.75rem',  // 12px
        'space-16': '1rem',     // 16px
        'space-20': '1.25rem',  // 20px
        'space-24': '1.5rem',  // 24px
        'space-28': '1.75rem',  // 28px
        'space-32': '2rem',     // 32px
        'space-36': '2.25rem',  // 36px
        'space-40': '2.5rem',   // 40px
      },
      fontFamily: {
        // From Figma: typography/paragraph, typography/heading
        sans: ['Cerebri Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        // From Figma typography (node 38149-2101) — use these classes for exact match
        // Headings: Cerebri Sans Semibold (600), lineHeight 1, letterSpacing 0
        'heading-1': ['1.625rem', { lineHeight: '1', fontWeight: '600' }],   // 26px — h1
        'heading-2': ['1.25rem', { lineHeight: '1', fontWeight: '600' }],   // 20px — h2
        'heading-3': ['1.0625rem', { lineHeight: '1', fontWeight: '600' }],  // 17px — h3
        'heading-4': ['0.9375rem', { lineHeight: '1', fontWeight: '600' }],  // 15px — h4
        'heading-5': ['0.8125rem', { lineHeight: '1', fontWeight: '600' }],  // 13px — h5
        'heading-6': ['0.625rem', { lineHeight: '1', fontWeight: '600' }],  // 10px — h6
        'heading-6-caps': ['0.625rem', { lineHeight: '1', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }], // 10px, caps
        // Display: Semibold, lineHeight 1
        'display-1': ['4rem', { lineHeight: '1', fontWeight: '600' }],      // 64px
        'display-2': ['3.25rem', { lineHeight: '1', fontWeight: '600' }],   // 52px
        'display-3': ['2.625rem', { lineHeight: '1', fontWeight: '600' }],  // 42px
        'display-4': ['2rem', { lineHeight: '1', fontWeight: '600' }],      // 32px
        // Paragraph: Cerebri Sans Book (400)
        'paragraph-1': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],   // 16px / 24px
        'paragraph-2': ['0.875rem', { lineHeight: '1.375rem', fontWeight: '400' }], // 14px / 22px
        'line-1': ['1rem', { lineHeight: '1', fontWeight: '400' }],          // 16px single line
        'line-2': ['0.875rem', { lineHeight: '1', fontWeight: '400' }],     // 14px single line
        // Smallcaps: 8px, Semibold, 8% letter spacing
        'smallcaps': ['0.5rem', { lineHeight: '1', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }],
        // Legacy aliases (keep for existing usage)
        '2xs': ['0.875rem', { lineHeight: '1.375rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        'display-lg': ['2.625rem', { lineHeight: '1', fontWeight: '600' }],
        'display-md': ['2.25rem', { lineHeight: '1.25', fontWeight: '600' }],
        'display-sm': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      letterSpacing: {
        'caps': '0.08em', // 8% — for heading-6-caps, smallcaps
      },
      fontWeight: {
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      borderRadius: {
        // From Figma: layout/radius/radius-md, radius-xl
        md: '6px',   // radius-md
        xl: '10px',  // radius-xl
        card: '0.5rem',
        button: '0.375rem',
        input: '0.375rem',
        badge: '9999px',
        'card-lg': '0.75rem',
      },
      // Icon sizes: base 24px, small 16px — use class "icon" or "icon-sm" (see input.css)
      width: {
        icon: '24px',
        'icon-sm': '16px',
        'avatar-xs': '26px',
        'avatar-sm': '40px',
        'avatar-md': '48px',
        'avatar-lg': '64px',
        'avatar-xl': '82px',
        'avatar-2xl': '128px',
      },
      height: {
        icon: '24px',
        'icon-sm': '16px',
        'avatar-xs': '26px',
        'avatar-sm': '40px',
        'avatar-md': '48px',
        'avatar-lg': '64px',
        'avatar-xl': '82px',
        'avatar-2xl': '128px',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        dropdown: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        modal: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      },
    },
  },
};
