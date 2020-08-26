  let  my_library =[];
  let current_num = 0;

  function book(author, title, summary, pages, position, read=false){
    this.author = author;
    this.title= title;
    this.summary =summary;
    this.number_of_pages=pages;
    this.read = false;
    this.position = position;
  }


  function getValues(){
    let a = document.querySelector("#author").value;
    let t = document.querySelector("#title").value;
    let n = document.querySelector("#numbers").value;
    let s = document.querySelector("#sum").value;
    console.log(current_num)
    let p = new book (a,t,s,n, current_num)
    console.log(p)
    my_library.push(p);
    current_num = current_num + 1;
    DeleteAll()
    getOnScreen()
    Delete_Current()
    make_read()
  }


  function getOnScreen(){
    for (let i of my_library){
      let m =  document.querySelector(".cont");
      let cont =  document.createElement("div");
      m.appendChild(cont);

      //creating all elements
      cont.classList.add("card");
      let head = document.createElement("p");
      let p = document.createElement("p");
      let s = document.createElement("p");
      let num = document.createElement("p");
      let button = document.createElement("button");
      let button_2 = document.createElement("button");
      button.classList.add("delete")
      button_2.classList.add("read");
      let att = document.createAttribute("num");

      //putting everything on screen
      cont.appendChild(p);
      cont.appendChild(head);
      cont.appendChild(s);
      cont.appendChild(num);
      cont.appendChild(button);
      cont.appendChild(button_2);

      head.classList.add("name");
      p.classList.add("title");
      s.classList.add("summary");
      num.classList.add("number");
      att.value = new String(i.position)
      cont.setAttributeNode(att);

      // putting all the data into the elements
      head.innerHTML= i.author;
      p.innerHTML= i.title;
      num.innerHTML = i.number_of_pages;
      s.innerHTML = i.summary;
      button.innerHTML="delete";
      button_2.innerHTML="Mark as read";

  }

}

  function DeleteAll(){
    let m = document.querySelector(".cont")
    let d = document.querySelectorAll(".card");
    d.forEach( (b) =>{
      m.removeChild(b)})
    }

    function Delete_Current(){
      let card = document.querySelectorAll(".card");
      let m = document.querySelector(".cont");
      card.forEach( (i) => {
        let button = i.querySelector(".delete");
        button.addEventListener("click", () =>{
          m.removeChild(i)
        } )
      } )
    }

    function make_read(){
      let card = document.querySelectorAll(".card");
      let m = document.querySelector(".cont");
      card.forEach( (i) => {
        let button = i.querySelector(".read");
        button.addEventListener("click", () =>{
          att = i.getAttribute('num');
          let r = my_library[Number(att)];
          if (r.read === "true"){
            r.read = false;
          }
          else{
            r.read = true;
          }
        } )
      } )
    }
