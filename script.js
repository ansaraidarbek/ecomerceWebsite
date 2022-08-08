
let topState=null;
let selected=1;
let prev = 0;
let next = 2;
let navigatorSelected = 1;
let active = false;
let ajaxAsking = 0;

let begining = 0;
let ending = null;

function closeTop(){
    topState = null;
    $("#contactsB").removeClass("activated");
    $("#aboutB").removeClass("activated");
    $("#topArea").html('');
}

function closeBottom(){
    $("#bottomArea").html('');
    rmvLastSelected();
}

function activateTop(msg){
    closeBottom();
    console.log("here");
    $("#topArea").html(`
    <div class="top-second-line"></div>
    <div class="top-second-mc">
        <div class="top-secondf" id="main">
            <h1 class="header1">
                <span style="--data-x:0">Шьем</span>
                <span style="--data-x:1">с</span>
                <span style="--data-x:2">любовью</span>
            </h1>
            <span class="top-sfirst spanof">высокое качество</span>
            <span class="top-ssecond spanof">отличные цены</span>
            <span class="top-sthird spanof">25+ лет на рынке</span>
        </div>
        <div class="top-secondf" id="about">
            <h1 class="header2">
                What is Lorem Ipsum?
            </h1>
            <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
            </h4>
        </div>
        <div class="top-secondf" id="contacts">
            <div class="top-textarea">
                <div class="top-where">
                    <div class="together">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"/></svg>
                        <div class="textable">
                            <span>Наша швейная фабрика находится по адресу</span>
                            <span>город Шымкент, Казиева 18/1</span>
                        </div>
                    </div>
                    <div class="together">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"/></svg>
                        <div class="textable">
                            <span>Наш магазинчик находится по адресу</span>
                            <span>город Шымкент, Рыскулова 141/12</span>
                        </div>
                    </div>
                </div>
            <div class="top-whom">
                    <div class="together">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 0c-1.105 0-2 .896-2 2v18.678c-.001 2.213 3.503 3.322 7.005 3.322 3.498 0 6.995-1.106 6.995-3.322v-18.678c0-1.104-.895-2-2-2h-10zm5 22c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm5-4h-10v-14h10v14z"/></svg>
                        <span>+77775854565</span>
                    </div>
                    <div class="together">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 0c-1.105 0-2 .896-2 2v18.678c-.001 2.213 3.503 3.322 7.005 3.322 3.498 0 6.995-1.106 6.995-3.322v-18.678c0-1.104-.895-2-2-2h-10zm5 22c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm5-4h-10v-14h10v14z"/></svg>
                        <span>+77775854565</span>
                    </div>
                    <div class="together">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
                        <span>sauryq.kz</span>
                    </div>
                </div>
            </div>
            <form class="top-message" id="sauryqForm">
                <div class="top-msg">
                    <div class="left-msg">
                        <input type="text" placeholder="имя" id="sauryqName">
                        <input type="text" placeholder="эмаил" id="sauryqMail">
                        <input type="text" placeholder="телефон" id="sauryqPhone">
                    </div>
                    <div class="right-msg">
                        <textarea type="text" placeholder="ваш текст" id="sauryqText"></textarea>
                    </div>
                </div>
                <button class="top-sendbutt">Отправить</button>
            </form>
        </div>
        <div class="top-seconds">
            <img src="/sauryq.webp" alt="">
            <div class="icons">
                <svg id='svg_whats' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                <svg id='svg_inst' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </div>
        </div>
    </div>
    `);
    $("#"+msg).css("display", "flex");

    $("#svg_whats").click((e)=>{
        e.preventDefault();
        try{
            window.open("https://api.whatsapp.com/send?phone=77011707777", '_blank');
        }catch(e){
            console.log("something went wrong when user tried to open whatsap url")
        }
    })

    $("#svg_inst").click((e)=>{
        e.preventDefault();
        try{
            window.open("https://www.instagram.com/zhasau_kz/", '_blank');
        }catch(e){
            console.log("something went wrong when user tried to open whatsap url")
        }
    })

    function checkForms(){
        if($("#sauryqName").val() == ""){
            $("#sauryqName").focus();
            return false;
        }
        if($("#sauryqMail").val() == ""){
            $("#sauryqMail").focus();
            return false;
        }
        if($("#sauryqPhone").val() == ""){
            $("#sauryqPhone").focus();
            return false;
        }
        if($("#sauryqText").val() == ""){
            $("#sauryqText").focus();
            return false;
        }
        return true;
    }

    $("#sauryqForm").submit((e)=>{
        e.preventDefault();
        if(checkForms()){
            console.log("passed");
            // $.post( "sendMessage.php", { 
            //     name: `${$("#sauryqName").val()}`, 
            //     email: `${$("#sauryqMail").val()}`,
            //     phone: `${$("#sauryqPhone").val()}`,
            //     text: `${$("#sauryqText").val()}`, } )
            Email.send({
                Host : "smtp.gmail.com",
                Username : "randacc1223@gmail.com",
                Password : "Raia1960123857694@",
                To : 'aidarbek.ansar@mail.ru',
                From : "randacc1223@gmail.com",
                Subject : "This is the subject",
                Body : "And this is the body"
            }).then(
              message => alert(message)
            );
        }
    });

    return msg;
}

async function activateBottom(title){
    closeTop();
    $("#bottomArea").html(`
    <div class="bottom-allthings" id="bottom-mainArea">
    </div>
    <div class="bottom-line"></div>
    `);
    $("#bottom-mainArea").append('<div class="bottom-things" id="bottom-thingsArea"></div>');
    var sequentNumber = ++ajaxAsking;
    await $.get( "getItems.php", { keyWord: `${title}` }, function( arr ) {
        if(sequentNumber == ajaxAsking){
            let things =  JSON.parse(arr);
            for(let i=0; i<things.length; i++){
                let thing = createBottomThing(things[i]);
                $("#bottom-thingsArea").append(thing);
    
                thing.addEventListener("click", (e)=>{
                    e.preventDefault();
                    $("#_"+things[i].id).addClass("removedThing");
                    if(!active){
                        $("#bottom-thingsArea").addClass("bottom-selected");
                        active=true;
                    }else{
                        let oldId = JSON.parse(sessionStorage.getItem("removedThing"));
                        $("#"+oldId).removeClass("removedThing");
                        $('#theOnlyOne').remove();
                    }
                    sessionStorage.setItem("removedThing", JSON.stringify(`_${things[i].id}`));
                    let mainThing = createSpecialBottomThing(things[i]);
                    $("#bottom-mainArea").prepend(mainThing);
                    if(i+1<things.length){
                        $("#_"+things[i+1].id).focus();
                    }else{
                        $("#_"+things[i-1].id).focus();
                    }
                });
            }
        }
    });
}

$(document).ajaxStop(function() {
    // place code to be executed on completion of last outstanding ajax call here
    console.log("all done");
    ajaxAsking = 0;
  });

function createMediaGroup(groupId){
    let div = document.createElement("div");
    div.classList.add("media-group");
    div.setAttribute("id", `group-${groupId}`);
    return div
}

function changeNavigator(num){
    $("#navigate"+navigatorSelected).removeClass("navigator-selected");
    $("#navigate"+num).addClass("navigator-selected");
    navigatorSelected = num;
}

function createNavigator(groupId){
    let navigator = document.createElement("div");
    navigator.setAttribute("id", `navigate${groupId}`);
    navigator.addEventListener("click", (e)=>{
        e.preventDefault();
        window.location.href = `#group-${groupId}`
        changeNavigator(groupId);
        prev = groupId - 1;
        next = groupId + 1;
        checkTruth()
    });
    return navigator;
}

function rmvLastSelected(){
    let lastSelected = JSON.parse(sessionStorage.getItem("lastSelected"));
    if(lastSelected){
        $("#"+lastSelected).removeClass("selected-element");
    }
}

function createMediaElement(image, title){
    let mediaElement = document.createElement("div");
    let title2 = title.replace(/\s+/g, '');
    mediaElement.setAttribute("id", `_${title2}`);
    mediaElement.classList.add("media-element");
    let img = document.createElement("img");
    img.setAttribute("src", `${image}`);
    img.setAttribute("alt", `${title}`);
    let span = document.createElement("span");
    span.innerText = title;
    mediaElement.append(img);
    mediaElement.append(span);

    mediaElement.addEventListener("click", async (e)=>{
        e.preventDefault();
        rmvLastSelected();
        sessionStorage.setItem("lastSelected", JSON.stringify(`_${title2}`));
        mediaElement.classList.add("selected-element");
        active=false;
        await activateBottom(title);
    })
    return mediaElement
}

async function createGroups(){
    let result;
    await $.get("getGroups.php ", function(array){
        array = JSON.parse(array);
        let groupId = 1;
        let start = 0;
        for(let i=0; i<array.length; i++){
            // console.log(array[i].path);
            let mediaGroup = null
            if (start == 0){
                mediaGroup = createMediaGroup(groupId);
                let navigator = createNavigator(groupId);
                $("#navigators").append(navigator);
                $("#offeredThings").append(mediaGroup);
            }
            let mediaElement = createMediaElement(`groups/${array[i].path}`, array[i].title);
            $("#group-"+groupId).append(mediaElement);
            start++;
            if(start == 5 && i!=array.length-1){
                groupId++;
                start=0;
            }
        }
    
        result = groupId;
    });
    return result;

}

// function lulItsMe(){
//     $.get("getGroups.php ", function(data){
//         // Display the returned data in browser
//         console.log(JSON.parse(data));
//     });
// }

$( document ).ready(async function() {
    activateTop("main");
    let size = await createGroups();
    ending = size+1;
    navigateButtons(0, size+1);
});

function checkTruth(){
    if(prev == begining){
        $("#previousButton").addClass("buttonsDiactivated");
    }else{
        $("#previousButton").removeClass("buttonsDiactivated");
    }
    if(ending != null && next == ending){
        $("#nextButton").addClass("buttonsDiactivated");
    }else{
        $("#nextButton").removeClass("buttonsDiactivated");
    }
}

function navigateButtons(start, stop){
    $("#navigate1").addClass("navigator-selected");
    checkTruth();

    $("#previousButton").click((e)=>{
        $("#previousButton").attr('href', `#group-${prev}`);
        $("#nextButton").attr('href', `#group-${--next}`);
        changeNavigator(prev);
        --prev;
        checkTruth();
    })

    $("#nextButton").click((e)=>{
        $("#previousButton").attr('href', `#group-${++prev}`);
        $("#nextButton").attr('href', `#group-${next}`);
        changeNavigator(next);
        ++next;
        checkTruth();
    })
}

$("#aboutB").click((e)=>{
    e.preventDefault();
    if(topState!="about"){
        topState = activateTop("about");
        $("#aboutB").addClass("activated");
        $("#contactsB").removeClass("activated");
    }
});

$("#contactsB").click((e)=>{
    e.preventDefault();
    if(topState!="contacts"){
        topState = activateTop("contacts");
        $("#contactsB").addClass("activated");
        $("#aboutB").removeClass("activated");
    }
});

$("#mainB").click((e)=>{
    e.preventDefault();
    if(topState!="main"){
        topState = activateTop("main");
        $("#contactsB").removeClass("activated");
        $("#aboutB").removeClass("activated");
    }
});

function createBottomThing(thing){
        let bottomThing = document.createElement("div");
        bottomThing.classList.add("bottom-thing");
        bottomThing.setAttribute("id", `_${thing.id}`);
        let bottomImg = document.createElement("div");
        bottomImg.classList.add("bottom-img");
        let img = document.createElement("img");
        img.setAttribute("src", `items/${thing.path1}`);
        let bottomText = document.createElement("div");
        bottomText.classList.add("bottom-text");
        let bottomTitle = document.createElement("span");
        bottomTitle.classList.add("bottom-title");
        bottomTitle.innerText = thing.title;
        let bottomPrice = document.createElement("span");
        bottomPrice.classList.add("bottom-price");
        bottomPrice.innerHTML = thing.price1+" &#8376";
        bottomText.appendChild(bottomTitle);
        if(thing.amount!=null){
            let bottomAmount = document.createElement("span");
            bottomAmount.classList.add("bottom-amount");
            bottomAmount.innerText = "в наличии "+thing.amount+" шт.";
            bottomText.appendChild(bottomAmount);
        }
        bottomText.appendChild(bottomPrice);
        bottomImg.appendChild(img);
        bottomThing.appendChild(bottomImg);
        bottomThing.appendChild(bottomText);

        return bottomThing;
}

function createSpecialBottomThing(thing){
    let mainThing = document.createElement("div");
    mainThing.classList.add("bottom-mainthing");
    mainThing.setAttribute("id", "theOnlyOne");
    let pictures = createPicturesSet(thing);
    let bottomTopxTexts = document.createElement("div");
    bottomTopxTexts.classList.add("bottom-topxtexts");
    let bottomTexts = document.createElement("div");
    bottomTexts.classList.add("bottom-texts");
    bottomTexts.innerHTML = `
        <h2>${thing.maintitle}</h2>
        <h4>${thing.about}</h4>
    `;
    let bottomAboutPrices = createBottomAboutPrices(thing);
    let bottomAboutThing = createBottomAboutThing(thing);
    bottomTexts.appendChild(bottomAboutPrices);
    bottomTexts.appendChild(bottomAboutThing);
    bottomTopxTexts.appendChild(bottomTexts);
    let spanElem = document.createElement("span");
    spanElem.innerText = "доставка по всему Казахстану!";
    bottomTopxTexts.appendChild(spanElem);
    mainThing.appendChild(pictures);
    mainThing.appendChild(bottomTopxTexts);
    return mainThing;
}

function createPicturesSet(thing){
    let bottomPictures = document.createElement("div");
    bottomPictures.classList.add("bottom-pictures");
    let imgMain = document.createElement("img");
    imgMain.setAttribute("src", `items/${thing.path1}`);
    imgMain.setAttribute("id", "mainPagePicture");
    let bottomOtherPictures = document.createElement("div");
    bottomOtherPictures.classList.add("bottom-otherpictures");
    for(let i=1; i<=5; i++){
        if(thing[`path${i}`] != null){
            let imgOther = document.createElement("img");
            imgOther.setAttribute("src", `items/${thing[`path${i}`]}`);
            imgOther.addEventListener("click", (e)=>{
                e.preventDefault();
                $("#mainPagePicture").prop("src", `items/${thing[`path${i}`]}`);
            });
            bottomOtherPictures.appendChild(imgOther);
        }
    }
    bottomPictures.appendChild(imgMain);
    bottomPictures.appendChild(bottomOtherPictures);
    return bottomPictures;
}

function createBottomAboutPrices(thing){
    let bottomAboutPrices = document.createElement("div");
    bottomAboutPrices.classList.add("bottom-aboutprices");
    for(let i=1; i<=3; i++){
        let bottomAboutPrice = document.createElement("div");
        bottomAboutPrice.classList.add("bottom-aboutprice");
        if(thing[`priceAbout${i}`] != null){
            let span = document.createElement("span");
            span.classList.add("bottom-abouthow");
            span.classList.add("bottom-aboutsomething");
            span.innerText = thing[`priceAbout${i}`] + " шт."
            bottomAboutPrice.appendChild(span);
        }
        if(thing[`price${i}`] != null){
            let finalprice = document.createElement("h3");
            finalprice.classList.add("bottom-finalprice");
            finalprice.innerText = thing[`price${i}`] + " KZT";
            bottomAboutPrice.appendChild(finalprice);
            bottomAboutPrices.appendChild(bottomAboutPrice);
        }
    }
    return bottomAboutPrices;
}

function createBottomAboutThing(thing){
    let bottomAboutThing = document.createElement("div");
    bottomAboutThing.classList.add("bottom-aboutthing");
    let array = thing.thingsToKnow.split("/");
    let mainCategori = document.createElement("div");
    mainCategori.classList.add("bottom-categories");
    mainCategori.innerHTML = `
        <span class="bottom-aboutsomething">Номер:</span>
        <span class="bottom-bold">#${thing.id}</span>
    `;
    bottomAboutThing.appendChild(mainCategori);

    if(thing.amount != null){
        let firstCategories = document.createElement("div");
        firstCategories.classList.add("bottom-categories");
        firstCategories.innerHTML = `
            <span class="bottom-aboutsomething">В наличии:</span>
            <span class="bottom-bold">${thing.amount} шт.</span>
        `;
        bottomAboutThing.appendChild(firstCategories);
    }
    array.forEach(element => {
        let mine = element.split(":");
        let bottomCategories = document.createElement("div");
        bottomCategories.classList.add("bottom-categories");
        bottomCategories.innerHTML = `
            <span class="bottom-aboutsomething">${mine[0]}:</span>
            <span class="bottom-bold">${mine[1]}</span>
        `;
        bottomAboutThing.appendChild(bottomCategories);
    });
    return bottomAboutThing;
}