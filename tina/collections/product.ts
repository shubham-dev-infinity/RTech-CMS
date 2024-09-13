import { Collection } from "tinacms";

export const ProductCollection: Collection = {
  name: "product",
  label: "Product",
  path: "content/products",
  format: "md",
  ui: {
    router: () => "/",
  },
  fields: [
    {
      type: "string",
      name: "uniqueId",
      label: "UniqueId",
    },
    {
      type: "string",
      name: "index",
      label: "Index",
    },
    {
      type: "boolean",
      name: "isNew",
      label: "Is New?",
    },
    {
      type: "boolean",
      name: "isHighlight",
      label: "Is Highlight?",
    },
    {
      type: "image",
      name: "productImages",
      label: "Product Images",
      list: true
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "rich-text",
      name: "overviewDescription",
      label: "Overview Description",
    },
    {
      type: "rich-text",
      name: "description",
      label: "Description",
    },
    {
      type: 'object',
      name: 'disclosures',
      label: 'Disclosures',
      list: true,
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'Title'
        },
        {
          type: 'string',
          name: 'features',
          label: 'Features',
          list: true
        },
      ]
    },
    {
      type: 'object',
      name: 'buyLinks',
      label: 'Buy Links',
      list: true,
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'Title'
        },
        {
          type: 'string',
          name: 'url',
          label: 'URL',
        },
      ]
    }
  ],
};
