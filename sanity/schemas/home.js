export default {
  
  // Setup a 'document' type to house the page builder field
  
  name: "home",
  type: "document",
  title: "Home",
  fields: [
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        { type: 'seo'},
        { type: 'hero' },
        { type: 'textWithIllustration' },
        { type: 'callToAction' },
        { type: 'gallery' },
        {type: 'copyShort'}
        ]
    }
  ]
}