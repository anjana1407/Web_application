// Get all the elements with class name 'product'
const products = document.querySelectorAll('.product');

// Loop through the products and add event listeners to each one
products.forEach(product => {
  // Add a mouseover event listener to highlight the product
  product.addEventListener('mouseover', () => {
    product.style.backgroundColor = 'yellow';
  });

  // Add a mouseout event listener to remove the highlight
  product.addEventListener('mouseout', () => {
    product.style.backgroundColor = 'white';
  });
});
