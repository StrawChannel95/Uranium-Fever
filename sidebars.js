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

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    'intro',
    'features',
    'modhighlights',
    'requirements',
    'recommendedspecs',
    'setupinstructions',
    'updating',
    'modquickreference',
    'frequentlyaskedquestions',
    'supportfeedback',
    'credits',
  ],
  gallerySidebar: [
    'userinterface',
    'mechanics',
    'characters',
    'creatures',
    'armor',
    'weapons',
    'mojavewasteland',
    'thestrip',  
    'capitalwasteland',
    'megaton',
    'drywells',
    'lakehavasu',
    'arroyocanyon',
    'deadmoney',
    'honesthearts',
    'lonesomeroad',
    'oldworldblues',
    'anchorage',
    'thepitt',
    'pointlookout',
    'mothershipzeta',
    'brokensteel',
    'casinointeriors',
    'houseinteriors',
    'industrialinteriors',
    'bunkerinteriors',
    'undergroundinteriors',
    'deadmoneyinteriors',
    'oldworldbluesinteriors',
    'anchorageinteriors',
    'thepittinteriors',
  ],
  resourcesSidebar: [
   'resourcesoverview',
   'importantlinks',
   'stars',
   'sweetloadorder',
   'sweetrecommendedmods',
  ],
  changelogSidebar: [
    'changelog1.0.0.0',
  ],
};

export default sidebars;
