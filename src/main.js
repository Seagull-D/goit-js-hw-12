"use strict"
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import getPictures from "./js/pixabay-apy";
import createMurkup from "./js/render-funkcions";

const litebox = new SimpleLightbox('.list-js a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionClass: 'imageTitle',
});
const form = document.querySelector(".form-js");
const list = document.querySelector(".list-js");
const loader = document.querySelector(".loader");
const loadBtn = document.querySelector(".js-load-btn");


form.addEventListener("submit", toSabmit);
loadBtn.addEventListener("click", onLoadMore)
let page = 1;


function toSabmit(evt) {
    evt.preventDefault();
    
    const { picture } = evt.target.elements;
    const value = picture.value.trim();
    
     list.innerHTML = ""; 
    if(!value || value === " "){
        { iziToast.show({
      title:":(",         
      message: "Please add request!",
      position: "center",
      color: "red"
            });
            list.innerHTML = ":(";
            return
              
            }
    }
  
    
    loader.classList.remove("hidden");
   loadBtn.classList.replace("more-btn", "hidden");
    getPictures(value,page)
    
        .then(({ data: { hits, totalHits
        } }) => {
            page = 1
       let totalPage = Math.ceil(totalHits / hits.length);
         
            
            if (!hits.length) { iziToast.show({
      title:"X",         
      message: "Sorry, there are no images matching your search query. Please try again!",
      position: "center",
      color: "red"
            });
                
                list.innerHTML = "<h1>Ooops... 👻</h1>";
                
                if (page >= totalPage || !totalHits) {
                    loadBtn.classList.replace("more-btn", "hidden")
                }
                
            }
            else {
                list.innerHTML = createMurkup(hits);
                litebox.refresh(); 
              
                loadBtn.classList.replace("hidden", "more-btn");
               
                 
                }           
            
         })
        .catch((error) => {
            console.log(error.message)
            iziToast.show({
                title: "X",
                message: `${error.message}`,
                position: "center",
                color: "red"
            })
        })
        .finally(() => {
            picture.value = "" 
            loader.classList.add("hidden");
            
            
        })
}
async function onLoadMore() {
    page += 1;
    loadBtn.disabled = true;
    try { 
        const { data: { hits, totalHits
        } } = await getPictures(page);
      
        list.insertAdjacentHTML("beforeend", createMurkup(hits));
        let totalPage = Math.ceil(totalHits / hits.length);
        

        if (page >= totalPage || !totalHits) {
            loadBtn.classList.replace("more-btn", "hidden");
              iziToast.show({
      title:"X",         
      message: "Sorry, there are no images matching your search query. Please try again!",
      position: "center",
      color: "red"
            });  
        }
        const item = document.querySelector(".list-item");
        const itemHeight = item.getBoundingClientRect().height;
        window.scrollBy({
            left: 0,
            top: itemHeight * 2,
            behavior: "smooth",
        })
    }
    catch (error) {
        console.log(error.message);
        iziToast.show({
      title:"X",         
      message: `${error.message}`,
      position: "center",
      color: "red"
            });  
     }
    finally{ loadBtn.disabled = false;}
}


