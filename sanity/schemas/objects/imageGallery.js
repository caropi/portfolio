export default {
  name: "gallery",
  type: "object",
  title: "Gallery",
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
                    {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
                {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text'
            },
            {
              name: 'hyperlink',
              type: 'string',
              title: 'Hyperlink'
            }
          ]
        }
      ],
      options: {
        layout: 'grid'
      }
    }
  ]
}