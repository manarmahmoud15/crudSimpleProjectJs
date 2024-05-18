var productsContainer;
if (localStorage.getItem('OurPtoduct') != 0) {

    productsContainer = JSON.parse(localStorage.getItem('OurProduct'));
    displayData();
}
else {

    productsContainer = [];
}
var productNameInput = document.getElementById("productName");
var productpriceInput = document.getElementById("productprice");
var ProductCategoryInput = document.getElementById("ProductCategory");
var ProductDescriptionInput = document.getElementById("ProductDescription");
var inputs = document.getElementsByClassName("form-control");
var product;


function addProduct() {
    product = {
        name: productNameInput.value,
        price: productpriceInput.value,
        category: ProductCategoryInput.value,
        description: ProductDescriptionInput.value
    };
    productsContainer.push(product);
    localStorage.setItem('OurProduct', JSON.stringify(productsContainer));
    console.log(productsContainer);
}
function clearForm() {

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";

    }
}
function displayData() {
    var table = '';
    for (var i = 0; i < productsContainer.length; i++) {
        table += `<tr>
        <td>${i + 1}</td>
        <th>${productsContainer[i].name}</td>
        <th>${productsContainer[i].price}</td>
        <th>${productsContainer[i].category}</td>
        <th>${productsContainer[i].description}</td>
        <td><button onclick='updateProduct(${i})' class="btn btn-outline-info">Update</button></td>
        <td><button onclick='deleteProduct(${i})' class="btn btn-outline-danger">Delete</button></td>
    </tr>`;
    }

    document.getElementById("tableBody").innerHTML = table;
}
function display() {
    addProduct();
    clearForm();
    displayData();
}
function deleteProduct(index) {
    productsContainer.splice(index, 1);
    localStorage.setItem('OurProduct', JSON.stringify(productsContainer));
    displayData();
}
function searchProduct(productName) {
    var table = '';
    for (var i = 0; i < productsContainer.length; i++) {
        if (productsContainer[i].name.toLowerCase().includes(productName.toLowerCase()) == true) {

            table += `<tr>
            <td>${i + 1}</td>
            <th>${productsContainer[i].name}</td>
            <th>${productsContainer[i].price}</td>
            <th>${productsContainer[i].category}</td>
            <th>${productsContainer[i].description}</td>
            <td><button onclick='updateProduct(${i})' class="btn btn-outline-info">Update</button></td>
            <td><button onclick='deleteProduct(${i})' class="btn btn-outline-danger">Delete</button></td>
            </tr>`;
        }
    }
    document.getElementById("tableBody").innerHTML = table;
}
function updateProduct(index)
{
    productNameInput.value =productsContainer[index].name;
    productpriceInput.value =productsContainer[index].price;
    ProductCategoryInput.value =productsContainer[index].category;
    ProductDescriptionInput.value =productsContainer[index].description;
    document.getElementById('main-btn').innerHTML ="Update Product";

}
// searchProduct('t');
// localStorage.setItem('productNameInput' , 'toshiba');
// localStorage.setItem('productName' , 'samsung');
// // alert(localStorage.getItem('productName'));
// // alert(localStorage.length);
// // localStorage.clear();
// localStorage.removeItem('productName');