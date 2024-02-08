import React from "react";
import RectDOM from 'react-dom/client';
// importing the css file
import "./index.css";

 function Booklist(){
  return <><section className="main-sec">
  <Book tittle={firstbook.tittle}
        author={firstbook.author}
        img={firstbook.img}>
            <button>Click me</button>
            <p>This is the text generated using children props</p>
        </Book>
  <Book tittle={secoundbook.tittle}
        author={secoundbook.author}
        img={secoundbook.img}/>

  <Book/>

  <Book/>

  <Book/>
  </section>

  </>
 }

 const root = RectDOM.createRoot(document.getElementById('root'));
root.render(<Booklist/>);

// components 
// const Person=()=><h1>This is the person</h1>;
// const Message=()=>{
// return <p>This is the message
// </p>;};



// const tittle='The main book';

const firstbook={
    author:'The great adi',
    tittle:'NASHA',
    img:'./images/book1.jpg'
}

const secoundbook={
    author:'The great akash',
    tittle:'SAVAGE',
    img:'./images/book-2.jpg'
}


// const Book=(props)=>{
//     const {img,tittle,author}=props;
//     return <article>
//         <img src={img}/>
//         <h1>{tittle}</h1>
//         <h3>{author}</h3>
//     </article>
    
//     }


    //children 
    const Book=({img,tittle,author,children})=>{
        // const {img,tittle,author}=props;
        return <article>
            <img src={img}/>
            <h1>{tittle}</h1>
            <h3>{author}</h3>
            {children}
        </article>
        
        }