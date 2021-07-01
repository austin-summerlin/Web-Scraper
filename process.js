import { JSDOM } from 'jsdom';


export default async function processPage(html) {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  return [...document.querySelectorAll('.product_pod')]
    .map((bookElement) => ({
      title: bookElement.querySelector('h3').textContent,
      cover: bookElement.querySelector('.image_container img').src,
      price: bookElement.querySelector('.product_price .price_color').textContent
    }));
}
