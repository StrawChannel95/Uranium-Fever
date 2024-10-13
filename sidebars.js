/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').Sidebarsconfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually :)
  
  tutorialSidebar: [
    'ins01intro',
    'ins02features',
    'ins03modhighlights',
    'ins04requirements',
    'ins05recommendedspecs',
    'ins06setupinstructions',
    'ins07updating',
    'ins08modquickreference',
    'ins09faq',
    'ins10supportfeedback',
    'ins11credits',
  ],
  gallerySidebar: [
    'sc01userinterface',
    'sc02mechanics',
    'sc03characters',
    'sc04creatures',
    'sc05armor',
    'sc06weapons',
    'scuh01mojavewasteland',
    'scuh02thestrip',  
    'scuh03capitalwasteland',
    'scuh04megaton',
    'scuh05drywells',
    'scuh06lakehavasu',
    'scuh07arroyocanyon',
    'scuh08deadmoney',
    'scuh09honesthearts',
    'scuh10lonesomeroad',
    'scuh11oldworldblues',
    'scuh12anchorage',
    'scuh13thepitt',
    'scuh14pointlookout',
    'scuh15mothershipzeta',
    'scuh16brokensteel',
    'scuh17interiors',
  ],
  appendixSidebar: [
    'apx01stars',
  ],
  changelogSidebar: [
    'chg01changelog',
  ],
};

export default sidebars;
