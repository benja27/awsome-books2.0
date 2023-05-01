export const spa = () => {
    let navlinks = Array.from(document.querySelectorAll('.nav-link'));
    let content = Array.from(document.querySelectorAll('.spa'));
    
    navlinks.forEach((n) => {
        n.addEventListener("click",e=>{
            let index = navlinks.indexOf(n);
            let contentindex = content.indexOf(content[index]);
            console.log(index, contentindex)
            
            
            content.forEach(element => {
                if( index === content.indexOf(element) ){
                    console.log(content[index])
                    element.classList.remove('d-none');
                }else{                             
                    element.classList.add('d-none');
                }
            });
        })
    })

}

export default spa;