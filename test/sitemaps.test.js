
const assert = require('assert');
const fs = require('fs');
const libxmljs = require('libxmljs');

// Read the sitemap and schema from the file system
// Could just as easily get these over HTTP
const sitemap = fs.readFileSync('../sitemap.xml');
const schema = fs.readFileSync('./schemas/saft-ao.xsd');

// Parse the sitemap and schema
const sitemapDoc = libxmljs.parseXml(sitemap);
const schemaDoc = libxmljs.parseXml(schema);

// Perform validation
const isValid = sitemapDoc.validate(schemaDoc);

// Check results
assert.ok(isValid, sitemapDoc.validationErrors);