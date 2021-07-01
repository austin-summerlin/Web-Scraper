//this file should make an http request to the book website
//return the html that is on that site

import fetch from 'node-fetch';

export default async function ingest(url) {
  const res = await fetch(url);
  return res.text();
}

