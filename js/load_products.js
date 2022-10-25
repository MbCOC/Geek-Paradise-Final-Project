// parent product parent var
var productPar = document.querySelectorAll('.product');
//--- parent product parent var

// load product
for (i = 0; i < productData.length; i++) {
    var product = document.querySelectorAll('.product')[i];
    
    var product_title = document.createElement('h3');
    product_title.className = 'product-title';
    product_title.innerHTML = productData[i].previewInfo.title;

    var product_main = document.createElement('main');
    product_main.className = 'product-main';

    var product_preview = document.createElement('div');
    product_preview.className = 'product-preview';
    var product_preview_image = document.createElement('img');
    product_preview_image.src = productData[i].previewInfo.previewImage;
    product_preview.appendChild(product_preview_image);

    var product_price = document.createElement('section');
    product_price.className = 'product-price';
    product_price.innerHTML = productData[i].previewInfo.price;
    var price_index = document.createElement('span');
    price_index.className = 'price_index';
    price_index.innerHTML = ' UAH';
    product_price.appendChild(price_index);

    var product_footer = document.createElement('footer');
    product_footer.className = 'product-footer';
    var buy_product_button = document.createElement('button');
    buy_product_button.className = 'buy-product';
    buy_product_button.innerHTML = 'Добавить в корзину';


    product.append(product_title);
    product.append(product_main);
    product.append(product_footer);

    product_main.appendChild(product_preview);
    product_main.appendChild(product_price);

    product_footer.appendChild(buy_product_button);
};
//--- load product

//* sale product blocks
var productArr = [
    document.getElementById('godOfWarPs4StandartEdition'),
    document.getElementById('tlouPs4Remastered'),
    document.getElementById('spiderMan2018Ps4'),
    document.getElementById('bloodBornePs4StandartEdition'),
    document.getElementById('sekiroStandartEdition'),
];
//--- sale product blocks

//* create product page
var product_page = document.createElement('div');
product_page.className = 'product-page display_none';
var product_page_header = document.createElement('header');
product_page_header.className = 'product-page-header';
var productCategory = document.createElement('h3');
productCategory.id = 'productCategory';
productCategory.innerHTML = 'Главная';
product_page_header.appendChild(productCategory);

var product_page_main = document.createElement('main');
product_page_main.className = 'product-page-main';
var productTitle = document.createElement('h3');
productTitle.id = 'productTitle';
product_page.appendChild(productTitle);
var product_page_inner_main = document.createElement('main');
product_page_inner_main.className = 'product-page-inner-main';
product_page_main.appendChild(product_page_inner_main);
var selling_page = document.createElement('section');
selling_page.className = 'selling-page';
product_page_inner_main.appendChild(selling_page);

var switch_image = document.createElement('div');
switch_image.className = 'switch-image';
selling_page.appendChild(switch_image);
var imageNext = document.createElement('button');
imageNext.id = 'imageNext';
switch_image.appendChild(imageNext);
var imageNext_image = document.createElement('img');
imageNext_image.src = 'img/angle-small-down-free-icon-font.png';
imageNext.appendChild(imageNext_image);
var imageBack = document.createElement('button');
imageBack.id = 'imageBack';
switch_image.appendChild(imageBack);
var imageBack_image = document.createElement('img');
imageBack_image.src = 'img/angle-small-down-free-icon-font.png';
imageBack.appendChild(imageBack_image);
var imageCount = document.createElement('div');
imageCount.id = 'imageCount';
// imageCount.innerHTML = '';
switch_image.appendChild(imageCount);
var previewImage = document.createElement('img');
previewImage.id = 'previewImage';
// previewImage.src = 'img/product_img/sekiro/big_preview/1.jpg';
switch_image.appendChild(previewImage);

var short_description = document.createElement('div');
short_description.className = 'short-description';
selling_page.appendChild(short_description);
var productName = document.createElement('h1');
productName.id = 'productName';
// productName.innerHTML = 'name';
short_description.appendChild(productName);
var productPlatform = document.createElement('h3');
productPlatform.id = 'productPlatform';
// productPlatform.innerHTML = 'Sekiro';
short_description.appendChild(productPlatform);
var productPrice = document.createElement('h3');
productPrice.id = 'productPrice';
// productPrice.innerHTML = 'Sekiro';
short_description.appendChild(productPrice);
var buyButton = document.createElement('button');
buyButton.id = 'buyBtn';
buyButton.innerHTML = 'Добавить в корзину';
short_description.appendChild(buyButton);

var productDescription = document.createElement('section');
productDescription.id = 'productDescription';
product_page_inner_main.appendChild(productDescription);
var productTags = document.createElement('div');
productTags.id = 'productTags';
// productTags.innerHTML = '#Tags';
productDescription.appendChild(productTags);
var productInfo = document.createElement('div');
productInfo.id = 'productInfo';
// productInfo.innerHTML = 'productInfo';
productDescription.appendChild(productInfo);
//--- create product page

var previewImageIndexNext;
var previewImageIndexBack;

document.getElementById('heroInnerMain').appendChild(product_page);


for(i=0; i<productArr.length;i++){
    productArr[i].addEventListener('click',(e)=>{
        product_page.classList.remove('display_none')
        document.getElementById('mainGameSect').classList.add('display_none');
        document.getElementById('mainPlatformSect').classList.add('display_none');
        document.getElementById('mainAccessoriesSect').classList.add('display_none');
        e = e.currentTarget.getAttribute('data-index');
        for(i=0;i<productData.length;i++){
        //* create new product page
            imageNext.setAttribute('data-image', e);
            imageBack.setAttribute('data-image', e);
            previewImage.src = productData[e].fullInfo.images[0];
            imageCount.innerHTML = 1;
            productName.innerHTML = productData[e].name;
            productPlatform.innerHTML = productData[e].fullInfo.platform;
            productPrice.innerHTML = productData[e].previewInfo.price + ' UAH';
            buyButton.setAttribute('buy-index', e);
            productTags.innerHTML = productData[e].tags;
            productInfo.innerHTML = productData[e].fullInfo.description;

            product_page.appendChild(product_page_header);
            product_page.appendChild(product_page_main);
            break;
        };
    //* reload page
        document.querySelector('.product-page-header').addEventListener('click',()=>{
            product_page.classList.add('display_none')
            document.getElementById('mainGameSect').classList.remove('display_none');
            document.getElementById('mainPlatformSect').classList.remove('display_none');
            document.getElementById('mainAccessoriesSect').classList.remove('display_none');
        });
    //--- reload page
    });
};


let imageIndex = 0;
imageCount.innerHTML = imageIndex + 1;

let slideImage = function(e){ // функция
    eAttr = e.currentTarget.getAttribute('data-image');
    if(e.currentTarget === imageBack){
        if(imageIndex === 0){
            imageIndex = productData[eAttr].fullInfo.images.length - 1;
            imageCount.innerHTML = imageIndex + 1;
            previewImage.src = productData[eAttr].fullInfo.images[imageIndex];
            imageCount.innerHTML = imageIndex + 1;
            return;
        };
        imageIndex--;
        imageCount.innerHTML = imageIndex + 1;
        previewImage.src = productData[eAttr].fullInfo.images[imageIndex];
        imageCount.innerHTML = imageIndex + 1;
    };
    
    if(e.currentTarget === imageNext){
        if(imageIndex === productData[eAttr].fullInfo.images.length - 1){
            imageIndex = 0;
            imageCount.innerHTML = imageIndex + 1;
            previewImage.src = productData[eAttr].fullInfo.images[imageIndex];
            imageCount.innerHTML = imageIndex + 1;
            return;
        };
        imageIndex++;
        imageCount.innerHTML = imageIndex + 1;
        previewImage.src = productData[eAttr].fullInfo.images[imageIndex];
        imageCount.innerHTML = imageIndex + 1;
    };
};

imageBack.addEventListener('click', slideImage);
imageNext.addEventListener('click', slideImage);