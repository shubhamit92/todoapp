let today=new Date();
//const options={ weekday:"long", year:"numeric", month:"short", day:"numeric"}
const options={ weekday:"long",day:"numeric"}
console.log(today.toLocaleDateString('en',options));


let todo=[];


function checknotodo(){
    if(todo.length==0){
        let notodo=document.getElementById('no-todo');
        notodo.classList.remove('d-none');
        notodo.classList.add('no-todo');
    }
    else{
        let notodo=document.getElementById('no-todo');
        notodo.classList.remove('no-todo');
        notodo.classList.add('d-none');

    }
    
}
function blanktodo(){
    document.getElementById('add-title').value='';
    document.getElementById('add-desc').value='';
    document.getElementById('date').value='';

}
function rendertodo(){
    let bodytododiv=document.getElementById('todo-body');
    bodytododiv.innerHTML='';
    todo.forEach((todo,index)=>{
        let tododiv=document.createElement('div');
    tododiv.classList.add('todo');
    let checkboxdiv=document.createElement('input');
    checkboxdiv.type='checkbox';
    checkboxdiv.classList.add('todo-done');
    let bcontentdiv=document.createElement('div');
    bcontentdiv.classList.add('body-content');
    let titlediv=document.createElement('p');
    titlediv.classList.add('body-title');
    let descdiv=document.createElement('p');
    descdiv.classList.add('body-desc');
    let datediv=document.createElement('p');
    datediv.classList.add('date');
    let spandiv=document.createElement('span');
    spandiv.innerHTML="\u00d7";

    spandiv.addEventListener('click',()=>{
        deletetask(index);
    })


    //dataadding
    titlediv.innerHTML=todo.title;
    descdiv.innerHTML=todo.desc;
    let date=new Date(todo.date);
    let fdate=date.toLocaleDateString('en',options)
    datediv.innerHTML=fdate


    bodytododiv.appendChild(tododiv);
    tododiv.appendChild(checkboxdiv);
    tododiv.appendChild(bcontentdiv);
    tododiv.appendChild(spandiv)
    bcontentdiv.appendChild(titlediv);
    bcontentdiv.appendChild(descdiv);
    bcontentdiv.appendChild(datediv);


    })
    


}

function deletetask(index){
    todo.splice(index,1);
    rendertodo();
    //console.log(todo)

}

function todosort(){
    let sorted= todo.sort((a,b)=>{
        let dateA=new Date(a.date); 
        let dateB=new Date(b.date)
        if(dateA<dateB){
            return -1
        }else if(dateA>dateB){
            return 1
        }else{
            return 0
        }
    })
}


const todoadd=()=>{
    let title=document.getElementById('add-title').value;
    let desc=document.getElementById('add-desc').value;
    let date=document.getElementById('date').value;

    let tempobj={
        title:title,
        desc:desc,
        date:date,
    }

    todo.push(tempobj);
    console.log(todo);
    checknotodo()
    blanktodo()
    todosort()
    rendertodo()
   
}

