function toggle(){
    var navBar=document.getElementById('nav');
    if(navBar.style.display==="none"){
        navBar.style.display="block"
    }else{
        navBar.style.display="none"
    }
}

function marg1(){
    var slider=document.querySelector('#slider');
    slider.style.marginLeft='-100%';
    function marg2(){
    var slider=document.querySelector('#slider');
    slider.style.marginLeft='-200%';
    function marg0(){
    var slider=document.querySelector('#slider');
    slider.style.marginLeft='0';
      setTimeout(marg1, 8000);
  }
      setTimeout(marg0, 8000);
  }
      setTimeout(marg2, 8000);
  }
      setTimeout(marg1, 8000);
    

    //   search button
        function search(){
            var searchbtn=document.getElementById('form');
            if(searchbtn.style.display==="none"){
                searchbtn.style.display="block"
            }else{
                searchbtn.style.display="none"
            }
        }
    