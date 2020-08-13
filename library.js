  let  my_library =[];

  function book(author, title, summary, pages){
    this.author = author
    this.title= title
    this.summary =summary
    this.number_of_pages=pages
    let read = false
  }

  function getValues(){
    let a = document.querySelector("#author").value;
    let t = document.querySelector("#title").value;
    let s = document.querySelector("#numbers").value;
    let n = document.querySelector("#sum").value;
    let p = new book (a,t,s,n)
    my_library.push(p);
    DeleteAll()
    getOnScreen()
  }

  function getOnScreen(){
    for (let i of my_library){
      let cont =  document.createElement("div")
      document.body.appendChild(cont)
      let head = document.createElement("h3");
      let p = document.createElement("p");
      let s = document.createElement("p");
      let num = document.createElement("p");
      cont.appendChild(head);
      cont.appendChild(p)
      cont.appendChild(s);
      cont.appendChild(num);
      head.innerHTML= i.author;
      p.innerHTML= i.title;
      num.innerHTML = i.number_of_pages;
      s.innerHTML = i.summary;
  }
}

  function DeleteAll(){
    let d = document.querySelectorAll("div");
    console.log(d)
    d.forEach( (b) =>{
      document.body.removeChild(b)})
    }
