// Start Jquery Area
$(document).ready(function(){
    // console.log('hi');
    // Start Rooms
    $('.roompopup').magnificPopup({
        type: 'image'
        // other options
      });
    // End Rooms
})

// End Jquery Area

// Start Javascript Area

// Start Header
// Start Nav Bar
function dropbtn(e){
    // console.log('hi');
    // document.getElementById('mydropdown').classList.toggle('show');

    //undefined
    //console.log(this);
    //console.log(e);

    //console.log(e.target);
    //console.log(e.target.nextElementSibling);
    e.target.nextElementSibling.classList.toggle('show');

  }
  
  function dropfilter(){
      // console.log('hay');
      var getsearch,filter,getdropdiv,getlinks,linkvalue;
  
      getsearch = document.getElementById('search');
      filter = getsearch.value.toUpperCase();
    //   getdropdiv = document.getElementById('mydropdown');
    //   getlinks = document.getElementsByTagName('a');
     getlinks = document.querySelectorAll('.mydropdowns a');

      // console.log(getlinks);
      
      for(var x=0; x<getlinks.length; x++){
          // linkvalue = getlinks[x].textContent;
          linkvalue = getlinks[x].textContent || getlinks[x].innerText;
          // console.log(linkvalue);
  
          if(linkvalue.toUpperCase().indexOf(filter) > -1){
              getlinks[x].style.display = "block";
          }else{
              getlinks[x].style.display = "none";
          }
      }
      
      // console.log(filter);
  
  
  }
  // End Nav Bar
  
  // Start auto background
  
  function* genfun(){
      var index = 8;
  
      while(true){
          yield index++;
  
          if(index > 13){
              index = 8;
          }
      }
  }
  
  var getgen = genfun();
  // console.log(getgen.next().value);
  // console.log(getgen.next().value);
  // console.log(getgen.next().value);
  // console.log(getgen.next().value);
  // console.log(getgen.next().value);
  // console.log(getgen.next().value);
  // console.log(getgen.next().value);
  // console.log(getgen.next().value);
  
  var getheader = document.querySelector('header');
  getheader.style.backgroundImage = `url('./assets/img/banner/banner${getgen.next().value}.jpg')`;
  
  
  function autoload(){
      getheader.style.backgroundImage = `url('./assets/img/banner/banner${getgen.next().value}.jpg')`;
  
  } 
  
  setInterval(autoload,2500);
  // End auto background
  
  // End Header
  
// Start Testimonials Section
const getcompanyname = document.querySelector('.companyname');
const getrole = document.querySelector('.role');
const gettestimonial = document.querySelector('.testimonial');

const testimonialdatas = [
    {
        name: "Rich Star Restaurant",
        position: "Our Outlet"
    },

    {
        name: "48 Sky Bar Cafe",
        position: "Our Partner"

    },

    {
        name: "52 Beach Hotel",
        position: "Our Branch"

    },

    {
        name: "Cool Land Swimming Pool",
        position: "Our Client"
    },

    {
        name: "Chaung Thar Spa",
        position: "Our Business"
    }
];

let idx = 0;

function updatetestimonail(){
    //  getcompanyname.textContent = testimonialdatas[idx].name;
    //  getrole.textContent = testimonialdatas[idx].position;
    //  gettestimonial.textContent = testimonialdatas[idx].text;
      
     const {name,position,text} = testimonialdatas[idx];

    // console.log(name);
    // console.log(position);
    // console.log(text);

     getcompanyname.textContent = name;
     getrole.textContent = position;
     gettestimonial.textContent = text;

     idx ++;

     if(idx > testimonialdatas.length - 1){
        idx = 0;
     }


}

updatetestimonail();
setInterval(updatetestimonail,10000);

// End Testimonial Section

// Start Property Section
filterby("all");
function filterby(keyword){
    // console.log(keyword);

    var getfilters = document.getElementsByClassName('filters');
    // console.log(getfilters);

    if(keyword === 'all'){
      keyword = "";
    }

    for(var x =0; x<getfilters.length; x++){
        // console.log(getfilters[x]);
        // console.log(getfilters[x].className.indexOf(keyword) > -1);

        removeshowclass(getfilters[x],'show');

        if(getfilters[x].className.indexOf(keyword) > -1){
            addshowclass(getfilters[x],'show');
        }
    }
}

function addshowclass(ele,opt){
    // console.log(ele);

    var getfilters = ele.className.split(' ');
    // console.log(getfilters);

   var getopt = opt.split(' ');
    // console.log(getopt);
    //  console.log(getopt.length);
    // console.log(opt.length);

    for(var y=0; y<getopt.length; y++){
        // console.log(getopt[y]);

        // console.log(getfilters.indexOf(getopt[y]) === -1);

        if(getfilters.indexOf(getopt[y]) === -1){
            // ele.classList.add(getopt[y]);
            ele.className += " "+getopt[y];
        }
    }
    

}

function removeshowclass(ele,opt){

    var getfilters = ele.className.split(' ');
    // console.log(getfilters);
   
    var getopt = opt.split(' ');
    // console.log(getopt);
    // console.log(getopt.length);
    // console.log(opt.length);

    for(var y=0; y<getopt.length; y++){
        // console.log(getopt[y]);

        // console.log(getfilters.indexOf(getopt[y]) == -1);

        while(getfilters.indexOf(getopt[y]) > -1){
            getfilters.splice(getfilters.indexOf(getopt[y]),1);

        }
    }

    ele.className = getfilters.join(' ');
}

const getfiltercontrol = document.getElementById("filtercontrol");
const getlis = getfiltercontrol.getElementsByClassName("list-inline-item");

for(let i = 0;i < getlis.length; i++ ){
    getlis[i].addEventListener("click",function () {

        var curractive = document.querySelector('.activeitems');
        // console.log(curractive);
        curractive.className = curractive.className.replace(' activeitems','');

        this.className += ' activeitems';
    })
}
// End Property Section

// Start Chatbox
const getmychat = document.getElementById('mychat');

function openchatbox(){
    getmychat.style.display  = "block";
}

function closechatbox(){
    getmychat.style.display = "none";
}
// End Chatbox

// End Javascript Area

