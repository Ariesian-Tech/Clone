 function takethem(){
    location.href="https://www.whatsapp.com/download";
}
let con=document.getElementsByClassName('contact')[0];
let thirdcon=document.getElementsByClassName('thirdcontainer')[0];
let chatblock=document.getElementsByClassName('chatbox-wraper')[0];
chatblock.style.display="none";
 function hider(){
  
    if (window.innerWidth <= 767) {
        myFunction();
    }
  

  thirdcon.style.display="none";
  chatblock.style.display="block";
 }
 function myFunction() {
  thirdcon.style.display="none";
  second1.style.display="none";
  

  document.body.style.background="rgba(245, 222, 179, 0.224)"
  
  chatblock.style.display="block";


}

// now here api fetching logic
let showlist=()=>{
fetch('./data.json')
.then(res=>res.json())
.then(data=>{
    data.forEach(e => {
        con.insertAdjacentHTML('beforeend',`  <div class="jso">
        <img src="${e.image}" alt="profile photo">
            <div class="text-box">
            <h3>${e.name}</h3>
            <p>${e.Contact}</p>
          </div>
      
    </div>
    <br>`)
    });
})

}
setTimeout(showlist,2000);
// button hover

document.addEventListener('click',function(e){
if(e.target.classList.contains('bt')){
    document.querySelectorAll('.bt').forEach(bt2 => {
        bt2.classList.remove('brd2');

      });
    e.target.classList.add('brd2')
}
})
// now chatboot logic
let messageBar=document.querySelector('.bar-wrapper input')
let sendBtn=document.querySelector('.bar-wrapper button')
let messagebox=document.querySelector('.message-box')
let url="https://openrouter.ai/api/v1/chat/completions"
let key="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";
sendBtn.onclick=function(){
    if(messageBar.value.length>0){
       let message=` <div class="chat message">
                <img src="https://picsum.photos/id/238/200/300" alt="image">
                <div class="blue">
                  <div>Malik Muhammad Umair</div>
                <div id="rt">${messageBar.value}</div>
            </div>
            </div>
            
            `
            messagebox.insertAdjacentHTML('beforeend',message)
            let response=`  <div class="chat response ">
                <img src="Meta.png" alt="image">
                   <div class="blue rdj">
                 <div>Meta AI</div>
                <div class="new ">
                  <b> Typing...<b>
                </div>

            </div>
            </div>
            `
            setTimeout(() => {
                messagebox.insertAdjacentHTML('beforeend',response);
                let requestOptions={
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                       
                        "Authorization": `Beare ${key}`,


                    },
                    body:JSON.stringify({
                      "model":"deepseek/deepseek-r1:free",
                        "messages": [
                        
                          {
                            "role": "user",
                            "content": `${messageBar.value}`
                          }
                        ]
                    })
                }
                fetch(url,requestOptions)
                .then(res=>res.json())
                .then(data=>{
             console.log(data);
             
                    
                   const chatbotresponse=document.querySelector(".response .new");
                    chatbotresponse.innerHTML=data.choices[0].message.content;
                    chatbotresponse.classList.remove('new');
                    
                }).catch((error)=>{
                   console.log(error);
                   
                }
                )
            }, 100);
    }
}
// https://www.youtube.com/watch?v=ECxtBChPbk0    get free deepseak ai.
function shuffle(){
  fetch('./data.json')
        .then(res=>res.json())
        .then(data=>{
            data.forEach(e => {
                con.insertAdjacentHTML('afterbegin',`  <div class="jso">
                <img src="${e.image}" alt="profile photo">
                    <div class="text-box">
                    <h3>${e.name}</h3>
                    <p>${e.Contact}</p>
                  </div>
              
            </div>
            <br>`)
            });
        })
}