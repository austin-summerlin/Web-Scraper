import ingest from './ingest.js';
import processPage from './process.js';

ingest('http://books.toscrape.com/')
  .then(html => processPage(html))
  .then(books => console.log(books));

