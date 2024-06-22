let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let input=document.querySelector("#url").value
    // console.dir(input);
    let image=document.querySelector("img")
    // console.dir(image);
    let urlqr=`https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${input}`   //* to generate QR CODE we requried one link i.e. QR CHART BY GOOGLE
    image.src=urlqr;
})


