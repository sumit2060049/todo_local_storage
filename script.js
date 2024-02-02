// add todo
let addTodo = () =>{
    let todoText=document.getElementById("todo-text").value;
    if(todoText!=''){
        setData(todoText);
        listTodo();
    }
}
// set todo
let setData = (item) => {
    if(getData(item) != false)
    {
        alert("Item already added in Todo");
    }
    else{
        let data=getData();
        data=(data !=false)?data:[];
        data.push(item);
        data=JSON.stringify(data);

        localStorage.setItem('mytodo',data);
    }
}
// get todo
let getData = (item = null) => {
    let data=JSON.parse(localStorage.getItem('mytodo'));

    if(data){
        if(item){
            if(data.indexOf(item) != -1){
                return data[item];
            }else{
                return false;
            }
        }
        return data;
    }
    return false;
}

//print list of inerted item

let listTodo = () => {
    let html=``;
    let data=getData();
    if(data){

        html+=`<div class="task">`;
        data.forEach((value,item) => {
            html+=`<input type="checkbox" class ="task-check"/>
            <span class="taskname">${value} &nbsp;&nbsp'&nbsp;</span>
            <button class="btn btn-danger delete" onclick="removeData(${item})">Remove</button>
            <button class="btn btn-info edit" onclick="editData(${item})">Edit</button>`
        });
        html+=`</div>`;
    }
    document.getElementById('todo-item').innerHTML=html;
}


// Remove item from local storage

let removeData = (itemID) => {
    let data=getData();
    if(data){
        let newData= data.filter((v,i) => {
            console.log(v);
            console.log(i);
            return i != itemID});
        newData = JSON.stringify(newData);
        localStorage.setItem('mytodo',newData);
        listTodo();
    }else{
        alert("no data found")
    }
}