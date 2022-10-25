// show profile window
for(i=0;i<tagsData.length;i++){
    let tagElement = document.createElement('li');
    tagElement.innerHTML = tagsData[i];
    document.getElementById('tagCatalogList').appendChild(tagElement)
}

let profileSettingsToggles = [
    document.querySelector('.item_data'),
    document.querySelector('.item_edit_data'),
    document.querySelector('.item_cart'),
    document.querySelector('.item_search'),
];
let profileSettings = {
    'item_data':document.getElementById('userData'),
    'item_edit_data':document.getElementById('editData'),
    'item_cart':document.getElementById('shopCart'),
    'item_search':document.getElementById('searchInstruction'),
};


for(i=0;i<profileSettingsToggles.length;i++){
    profileSettingsToggles[i].addEventListener('click',(e)=>{
        let thisEData = e.currentTarget.getAttribute('data-setting-open');
        $.each(profileSettings, function (arrayIndex, elementValue) { 
            elementValue.style.display = 'none';
        });
        profileSettings[thisEData].style.display = 'flex';
    });
};


let userData = [
    document.getElementById('userDataName'),
    document.getElementById('userDataSurname'),
    document.getElementById('userDataEmail'),
    document.getElementById('userDataPass'),
];

let editUserDataInput = [
    document.getElementById('userEditDataName'),
    document.getElementById('userEditDataSurname'),
    document.getElementById('userEditDataEmail'),
    document.getElementById('userEditDataPass'),
];

let logOutData = [
    document.getElementById('logOutName'),
    document.getElementById('logOutSurname'),
    document.getElementById('logOutEmail'),
    document.getElementById('logOutPass'),
];

document.querySelector('.personal-cabinet-toggle').addEventListener('click',e=>{
    if(document.getElementById('userProfile').style.display === 'flex'){
        document.getElementById('userProfile').style.display = 'none';
        document.querySelector('.filter-sect').style.display = 'flex';
        document.querySelector('.products-catalog-toggle').classList.remove('hide_elements');
        document.getElementById('searchInput').classList.remove('hide_elements');
        document.getElementById('searchActive').classList.remove('hide_elements');
        document.querySelector('.hero-inner-main').classList.remove('display_none');
        return;
    } else {
        for(i=0;i<userData.length;i++){
            if(userData[i].value.length >= 1 && userData[i].value !== " "){
                document.getElementById('userProfile').style.display = 'flex';
                document.querySelector('.filter-sect').style.display = 'none';
                document.querySelector('.products-catalog-toggle').classList.add('hide_elements');
                document.getElementById('searchInput').classList.add('hide_elements');
                document.getElementById('searchActive').classList.add('hide_elements');
                document.querySelector('.hero-inner-main').classList.add('display_none');
                return;
            }
        // check logIn access
            if(userData[i].value.length < 1 || userData[i].value === " "){
                document.body.style.overflowY = 'hidden';
                document.getElementById('logInWindow').style.display = 'flex';
                document.getElementById('darkBg').style.display = 'block';

                document.getElementById('logInBtn').addEventListener('click',e=>{
                    if(document.getElementById('logInEmail').value === userData[3].value && userData[3].value.length > 1 &&
                    document.getElementById('logInPass').value === userData[4].value && userData[4].value.length > 1 ){
                        document.body.style.overflowY = 'auto';
                        document.querySelector('.hero-inner-main').classList.add('display_none');
                        document.getElementById('logInWindow').style.display = 'none';
                        document.getElementById('darkBg').style.display = 'none';

                        document.getElementById('userProfile').style.display = 'flex';
                        document.querySelector('.filter-sect').style.display = 'none';
                        document.querySelector('.products-catalog-toggle').classList.add('hide_elements');
                        return;
                    } else {
                        alert('Аккаунт не найден, повторите попытку');
                    };
                });
                document.getElementById('createAccountBtn').addEventListener('click',e=>{
                    document.getElementById('logInWindow').style.display = 'none';
                    document.getElementById('logOutWindow').style.display = 'flex';
                    return;
                });
                document.getElementById('logOutBtn').addEventListener('click',e=>{
                    if(logOutData[0].value.length > 2 && logOutData[1].value.length > 2 &&
                    logOutData[2].value.length > 2 && logOutData[3].value.length > 2){
                        userData[0].value = logOutData[0].value;
                        userData[1].value = logOutData[1].value;
                        userData[2].value = logOutData[2].value;
                        userData[3].value = logOutData[3].value;

                        document.getElementById('userProfile').style.display = 'flex';
                        document.querySelector('.filter-sect').style.display = 'none';
                        document.querySelector('.products-catalog-toggle').classList.add('hide_elements');
                        document.getElementById('searchInput').classList.add('hide_elements');
                        document.getElementById('searchActive').classList.add('hide_elements');
                        document.querySelector('.hero-inner-main').classList.add('display_none');
                        document.getElementById('userData').style.display = 'flex';

                        document.body.style.overflowY = 'auto';
                        document.getElementById('logInWindow').style.display = 'none';
                        document.getElementById('logOutWindow').style.display = 'none';
                        document.getElementById('darkBg').style.display = 'none';
                        return;
                    } else {
                        alert('Поля должны включать не менее 3 символов');
                        return;
                    };
                });
                return;
            };
        };
    };
});

document.getElementById('darkBg').addEventListener('click',()=>{
    document.body.style.overflowY = 'auto';
    document.getElementById('logInWindow').style.display = 'none';
    document.getElementById('logOutWindow').style.display = 'none';
    document.getElementById('darkBg').style.display = 'none';
    return;
});


// edit user data
let changeImages = [
    document.querySelector('.change-img-1'),
    document.querySelector('.change-img-2'),
    document.querySelector('.change-img-3'),
    document.querySelector('.change-img-4'),
    document.querySelector('.change-img-5'),
    document.querySelector('.change-img-6'),
];

for(i=0;i<changeImages.length;i++){
    changeImages[i].addEventListener('click',(e)=>{
        document.getElementById('userMainPhoto').src = e.currentTarget.src
        document.getElementById('userPhoto').src = e.currentTarget.src
    });
};

document.getElementById('confirmEdit').addEventListener('click',e=>{
    for(i=0;i<editUserDataInput.length;i++){
        if(editUserDataInput[i].value.length > 2){
            userData[i].value = editUserDataInput[i].value;
        } else {
            alert('Поля должны включать не менее 3 символов');
            return;
        };
    };
})
    
// edit user data