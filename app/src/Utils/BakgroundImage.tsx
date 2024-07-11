import React from 'react'

const BakgroundImage = (selector:string) => {
    const elements=document.querySelectorAll(selector)
    elements.forEach((element)=>{
        const bg = element.getAttribute('data-setbg');
        if (bg) {
            const elem = element as HTMLElement;
            elem.style.backgroundImage = `url(${bg})`;
        }
    })

}

export default BakgroundImage