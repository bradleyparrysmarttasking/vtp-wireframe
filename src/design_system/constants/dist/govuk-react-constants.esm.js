import { FOCUS_COLOUR } from 'govuk-colours';

// Tracking:
const FOCUS_WIDTH = '3px';
const FOCUS_WIDTH_RAW = 3;
const FOCUSABLE = {
  '&:focus': {
    outline: `${FOCUS_WIDTH} solid ${FOCUS_COLOUR}`,
    outlineOffset: 0
  }
};
const FOCUSABLE_FILL = {
  '&:focus': {
    outline: `${FOCUS_WIDTH} solid ${FOCUS_COLOUR}`,
    outlineOffset: 0,
    backgroundColor: FOCUS_COLOUR
  }
};

// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/settings/_spacing.scss

const RESPONSIVE_0 = {
  mobile: 0,
  tablet: 0
};
const RESPONSIVE_1 = {
  mobile: 5,
  tablet: 5
};
const RESPONSIVE_2 = {
  mobile: 10,
  tablet: 10
};
const RESPONSIVE_3 = {
  mobile: 15,
  tablet: 15
};
const RESPONSIVE_4 = {
  mobile: 15,
  tablet: 20
};
const RESPONSIVE_5 = {
  mobile: 15,
  tablet: 25
};
const RESPONSIVE_6 = {
  mobile: 20,
  tablet: 30
};
const RESPONSIVE_7 = {
  mobile: 25,
  tablet: 40
};
const RESPONSIVE_8 = {
  mobile: 30,
  tablet: 50
};
const RESPONSIVE_9 = {
  mobile: 40,
  tablet: 60
};
const SPACING_MAP = [RESPONSIVE_0, RESPONSIVE_1, RESPONSIVE_2, RESPONSIVE_3, RESPONSIVE_4, RESPONSIVE_5, RESPONSIVE_6, RESPONSIVE_7, RESPONSIVE_8, RESPONSIVE_9];
const SPACING_MAP_INDEX = Array.from(Array(SPACING_MAP.length).keys());
const SPACING_POINTS = {
  0: 0,
  1: 5,
  2: 10,
  3: 15,
  4: 20,
  5: 25,
  6: 30,
  7: 40,
  8: 50,
  9: 60
};

// Ref: https://github.com/alphagov/govuk-frontend/blob/68bd09bb3e54b7ef4b4084ad2b3336858923a041/src/settings/_measurements.scss#L23
const WIDTHS = {
  'one-quarter': '25%',
  'one-third': '33.3333%',
  'one-half': '50%',
  'two-thirds': '66.6666%',
  'three-quarters': '75%',
  full: '100%'
};

// https://design-system.service.gov.uk/styles/typography/
const TYPOGRAPHY_SCALE = {
  80: {
    mobile: {
      fontSize: 53,
      lineHeight: 55 / 53,
      spacing: RESPONSIVE_8.mobile
    },
    tablet: {
      fontSize: 80,
      lineHeight: 1,
      // 80 / 80
      spacing: RESPONSIVE_8.tablet
    },
    print: {
      fontSize: 53,
      lineHeight: 1.1
    }
  },
  48: {
    mobile: {
      fontSize: 32,
      lineHeight: 35 / 32,
      spacing: RESPONSIVE_8.mobile
    },
    tablet: {
      fontSize: 48,
      lineHeight: 50 / 48,
      spacing: RESPONSIVE_8.tablet
    },
    print: {
      fontSize: 32,
      lineHeight: 1.15
    }
  },
  36: {
    mobile: {
      fontSize: 24,
      lineHeight: 25 / 24,
      spacing: RESPONSIVE_6.mobile
    },
    tablet: {
      fontSize: 36,
      lineHeight: 40 / 36,
      spacing: RESPONSIVE_6.tablet
    },
    print: {
      fontSize: 24,
      lineHeight: 1.05
    }
  },
  27: {
    mobile: {
      fontSize: 18,
      lineHeight: 20 / 18,
      spacing: RESPONSIVE_4.mobile
    },
    tablet: {
      fontSize: 27,
      lineHeight: 30 / 27,
      spacing: RESPONSIVE_4.tablet
    },
    print: {
      fontSize: 18,
      lineHeight: 1.15
    }
  },
  24: {
    mobile: {
      fontSize: 18,
      lineHeight: 20 / 18,
      spacing: RESPONSIVE_4.mobile
    },
    tablet: {
      fontSize: 24,
      lineHeight: 30 / 24,
      spacing: RESPONSIVE_4.tablet
    },
    print: {
      fontSize: 18,
      lineHeight: 1.15
    }
  },
  19: {
    mobile: {
      fontSize: 16,
      lineHeight: 20 / 16,
      spacing: RESPONSIVE_4.mobile
    },
    tablet: {
      fontSize: 19,
      lineHeight: 25 / 19,
      spacing: RESPONSIVE_4.tablet
    },
    print: {
      fontSize: 14,
      lineHeight: 1.15
    }
  },
  16: {
    mobile: {
      fontSize: 14,
      lineHeight: 16 / 14,
      spacing: RESPONSIVE_4.mobile
    },
    tablet: {
      fontSize: 16,
      lineHeight: 20 / 16,
      spacing: RESPONSIVE_4.tablet
    },
    print: {
      fontSize: 14,
      lineHeight: 1.2
    }
  },
  14: {
    mobile: {
      fontSize: 12,
      lineHeight: 15 / 12,
      spacing: RESPONSIVE_4.mobile
    },
    tablet: {
      fontSize: 14,
      lineHeight: 20 / 14,
      spacing: RESPONSIVE_4.tablet
    },
    print: {
      fontSize: 12,
      lineHeight: 1.2
    }
  }
};

// NB Spacing values set above relate to headings
// body classes use different responsive margins
// captions use govuk-spacing(1) for xl and l sizes only

// heading sizes supported in govuk-frontend
const HEADING_SIZES = {
  XLARGE: 48,
  XL: 48,
  LARGE: 36,
  L: 36,
  MEDIUM: 24,
  M: 24,
  SMALL: 19,
  S: 19
};

// caption sizes supported in govuk-frontend
const CAPTION_SIZES = {
  XLARGE: 27,
  XL: 27,
  LARGE: 24,
  L: 24,
  MEDIUM: 19,
  M: 19
};

// body text sizes supported in govuk-frontend
const BODY_SIZES = {
  LARGE: 24,
  L: 24,
  MEDIUM: 19,
  M: 19,
  SMALL: 16,
  S: 16,
  XSMALL: 14,
  XS: 14
};

// Lookup between numerical header level and associated html element
const LEVEL_TAG = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6'
};

// Lookup between a header level (1-6) and the associated default font size
const LEVEL_SIZE = {
  1: 'XLARGE',
  2: 'LARGE',
  3: 'MEDIUM',
  4: 'SMALL',
  5: 'SMALL',
  6: 'SMALL'
};
const FONT_WEIGHTS = {
  bold: '700',
  regular: '400'
};

// Tracks https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/settings/_measurements.scss
const BORDER_WIDTH = '5px';
const BORDER_WIDTH_WIDE = '10px';
const BORDER_WIDTH_MOBILE = '4px';
const BORDER_WIDTH_FORM_ELEMENT = '2px';
const BORDER_WIDTH_FORM_ELEMENT_ERROR = '4px';
const BORDER_WIDTH_FORM_GROUP_ERROR = BORDER_WIDTH;
const SITE_WIDTH_PX = 960;
const SITE_WIDTH = `${SITE_WIDTH_PX}px`;
const FULL_WIDTH = '100%';

// tracks $govuk-breakpoints at https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/settings/_media-queries.scss
const BREAKPOINTS = {
  SMALLSCREEN: '320px',
  // @deprecated
  LARGESCREEN: '641px',
  // @deprecated
  MOBILE: '320px',
  TABLET: '641px',
  DESKTOP: '769px'
};
const GUTTER_PX = 30;
const GUTTER = `${GUTTER_PX}px`;
const GUTTER_HALF = `${GUTTER_PX / 2}px`;
const GUTTER_ONE_THIRD = `${GUTTER_PX / 3}px`;
const SPACING = {
  SCALE_1: '5px',
  SCALE_2: '10px',
  SCALE_3: '15px',
  SCALE_4: '20px',
  SCALE_5: '30px',
  SCALE_6: '60px'
};
const SITE_WIDTH_PLUS_GUTTERS = `${SITE_WIDTH_PX + 2 * GUTTER_PX}px`;
const MEDIA_QUERY_PRINT = '@media print';
const MEDIA_QUERIES = {
  LARGESCREEN: `@media only screen and (min-width: ${BREAKPOINTS.LARGESCREEN})`,
  MAX: `@media only screen and (min-width: ${SITE_WIDTH_PLUS_GUTTERS})`,
  PRINT: MEDIA_QUERY_PRINT,
  TABLET: `@media only screen and (min-width: ${BREAKPOINTS.TABLET})`,
  DESKTOP: `@media only screen and (min-width: ${BREAKPOINTS.DESKTOP})`
};
const NTA_LIGHT = '"nta", Arial, sans-serif';
const NTA_LIGHT_TABULAR = `"ntatabularnumbers", ${NTA_LIGHT}`;
const FONT_STACK = `${NTA_LIGHT}`;
const FONT_STACK_TABULAR = `${NTA_LIGHT_TABULAR}`;
const FONT_STACK_PRINT = 'sans-serif';
const FONT_SIZE = {
  SIZE_14: '14px',
  SIZE_16: '16px',
  SIZE_18: '18px',
  // not directly used in govuk-frontend
  SIZE_19: '19px',
  SIZE_20: '20px',
  // Not used in govuk-frontend
  SIZE_24: '24px',
  SIZE_27: '27px'
};
const LINE_HEIGHT = {
  SIZE_14: '1.1428571429',
  SIZE_16: '1.25',
  SIZE_18: '1.3',
  // approximate - value in typography is correct
  SIZE_19: '1.3',
  // ditto
  // SIZE_24 differs here from 24 def in typography scale, which is 1.25
  // however that appears to be a mistake
  SIZE_24: '1.35'
};

export { BODY_SIZES, BORDER_WIDTH, BORDER_WIDTH_FORM_ELEMENT, BORDER_WIDTH_FORM_ELEMENT_ERROR, BORDER_WIDTH_FORM_GROUP_ERROR, BORDER_WIDTH_MOBILE, BORDER_WIDTH_WIDE, BREAKPOINTS, CAPTION_SIZES, FOCUSABLE, FOCUSABLE_FILL, FOCUS_WIDTH, FOCUS_WIDTH_RAW, FONT_SIZE, FONT_STACK, FONT_STACK_PRINT, FONT_STACK_TABULAR, FONT_WEIGHTS, FULL_WIDTH, GUTTER, GUTTER_HALF, GUTTER_ONE_THIRD, GUTTER_PX, HEADING_SIZES, LEVEL_SIZE, LEVEL_TAG, LINE_HEIGHT, MEDIA_QUERIES, MEDIA_QUERY_PRINT, NTA_LIGHT, NTA_LIGHT_TABULAR, RESPONSIVE_0, RESPONSIVE_1, RESPONSIVE_2, RESPONSIVE_3, RESPONSIVE_4, RESPONSIVE_5, RESPONSIVE_6, RESPONSIVE_7, RESPONSIVE_8, RESPONSIVE_9, SITE_WIDTH, SITE_WIDTH_PLUS_GUTTERS, SITE_WIDTH_PX, SPACING, SPACING_MAP, SPACING_MAP_INDEX, SPACING_POINTS, TYPOGRAPHY_SCALE, WIDTHS };
