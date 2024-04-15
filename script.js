const productList = document.getElementById('product-list');

fetch('http://localhost:9090/index/?pageSize=60')
  .then(response=>response.json())
  .then(data => {
    data.forEach(landingPage => {
      const li = document.createElement('li');
      const h3 = document.createElement('h3');
      const p = document.createElement('p');
      const p1=document.createElement('p');

      h3.innerText = "Product Name: "+landingPage.productName;
      p.innerText = "Vendor Name: "+landingPage.vendorName;
      p1.innerText="Price: "+landingPage.price;

      li.appendChild(h3);
      li.appendChild(p);
      li.appendChild(p1);
      productList.appendChild(li);
    });
  });