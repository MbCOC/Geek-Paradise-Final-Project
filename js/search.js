document.addEventListener('click', function(e){
// close found block on click
    if (e.target !== document.getElementById('searchResults')){
        document.getElementById('searchResults').classList.add('display_none');
    };
})

document.getElementById('searchInput').addEventListener('keyup', function search(searchTag, resoultName){
// get input value
    searchTag = document.getElementById('searchInput').value;
// remove old block
    if (document.getElementById('findBlock')){
        document.getElementById('findBlock').remove();
    };
    
// search function
    if (!searchTag.startsWith('#')){
    // search by product name
        if (searchTag.length<=0 || searchTag === ' '){
            document.getElementById('searchResults').classList.add('display_none');
            return;
        } else {
            document.getElementById('searchResults').classList.remove('display_none');
            // create new block
            let findBlock = document.createElement('div');
            findBlock.id = 'findBlock';
            let searchValue = document.createElement('h3');
            searchValue.innerHTML = '#'+"'"+searchTag+"'";
            findBlock.appendChild(searchValue);
            document.getElementById('searchResults').appendChild(findBlock);
            let foundElements = document.createElement('ul')
            findBlock.appendChild(foundElements);
    
            for(i=0; i<productData.length; i++){
                if(productData[i].name.toUpperCase().indexOf(searchTag.toUpperCase()) > -1){
                    resoultName = productData[i].name;
                    
                    let foundElement = document.createElement('li');
                    foundElement.setAttribute('data-search-index', i);
                    foundElement.innerHTML = resoultName;
                    findBlock.appendChild(foundElement);
                    foundElement.addEventListener('click',(e)=>{
                        document.getElementById('searchInput').value = '';
                        product_page.classList.remove('display_none')
                        document.getElementById('mainGameSect').classList.add('display_none');
                        document.getElementById('mainPlatformSect').classList.add('display_none');
                        document.getElementById('mainAccessoriesSect').classList.add('display_none');

                        let eSearchIndex = e.currentTarget.getAttribute('data-search-index');
                        imageNext.setAttribute('data-image', eSearchIndex);
                        imageBack.setAttribute('data-image', eSearchIndex);
                        previewImage.src = productData[eSearchIndex].fullInfo.images[0];
                        imageCount.innerHTML = 1;
                        productName.innerHTML = productData[eSearchIndex].name;
                        productPlatform.innerHTML = productData[eSearchIndex].fullInfo.platform;
                        productPrice.innerHTML = productData[eSearchIndex].previewInfo.price + ' UAH';
                        productTags.innerHTML = productData[eSearchIndex].tags;
                        productInfo.innerHTML = productData[eSearchIndex].fullInfo.description;
            
                        product_page.appendChild(product_page_header);
                        product_page.appendChild(product_page_main);

                        document.querySelector('.product-page-header').addEventListener('click',()=>{
                            product_page.classList.add('display_none')
                            document.getElementById('mainGameSect').classList.remove('display_none');
                            document.getElementById('mainPlatformSect').classList.remove('display_none');
                            document.getElementById('mainAccessoriesSect').classList.remove('display_none');
                        });
                        return;
                    });
                };
            };
        };    
    } else {
    // search by product tags
        if (searchTag.length<=1){
            document.getElementById('searchResults').classList.add('display_none');
            return;
        } else {
            document.getElementById('searchResults').classList.remove('display_none');
            // create new block
            let findBlock = document.createElement('div');
            findBlock.id = 'findBlock';
            let searchValue = document.createElement('h3');
            searchValue.innerHTML = "'"+searchTag+"'";
            findBlock.appendChild(searchValue);
            document.getElementById('searchResults').appendChild(findBlock);
            let foundElements = document.createElement('ul')
            findBlock.appendChild(foundElements);
    
            for(i=0; i<productData.length; i++){
                if(productData[i].tags.toUpperCase().indexOf(searchTag.toUpperCase()) > -1){
                    resoultName = productData[i].name;
    
                    let foundElement = document.createElement('li');
                    foundElement.setAttribute('data-search-index', i);
                    foundElement.innerHTML = resoultName;
                    findBlock.appendChild(foundElement);
                    foundElement.addEventListener('click',(e)=>{
                        document.getElementById('searchInput').value = '';
                        product_page.classList.remove('display_none')
                        document.getElementById('mainGameSect').classList.add('display_none');
                        document.getElementById('mainPlatformSect').classList.add('display_none');
                        document.getElementById('mainAccessoriesSect').classList.add('display_none');

                        let eSearchIndex = e.currentTarget.getAttribute('data-search-index');
                        imageNext.setAttribute('data-image', eSearchIndex);
                        imageBack.setAttribute('data-image', eSearchIndex);
                        previewImage.src = productData[eSearchIndex].fullInfo.images[0];
                        imageCount.innerHTML = 1;
                        productName.innerHTML = productData[eSearchIndex].name;
                        productPlatform.innerHTML = productData[eSearchIndex].fullInfo.platform;
                        productPrice.innerHTML = productData[eSearchIndex].previewInfo.price + ' UAH';
                        productTags.innerHTML = productData[eSearchIndex].tags;
                        productInfo.innerHTML = productData[eSearchIndex].fullInfo.description;
            
                        product_page.appendChild(product_page_header);
                        product_page.appendChild(product_page_main);

                        document.querySelector('.product-page-header').addEventListener('click',()=>{
                            product_page.classList.add('display_none')
                            document.getElementById('mainGameSect').classList.remove('display_none');
                            document.getElementById('mainPlatformSect').classList.remove('display_none');
                            document.getElementById('mainAccessoriesSect').classList.remove('display_none');
                        });
                        return;
                    });
                };
            };
        };
    };
    
});