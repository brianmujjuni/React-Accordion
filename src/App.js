import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    title: "How long do I have to return my chair?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },

]
export default function App() {
  return (
    <div className="App">
      <Accordion data={faqs}/>
      
    </div>
  );
}

function Accordion({data}){
  const [curOpen,setCurOpen] = useState(null)
return(
  <div className="accordion">
    {data.map((el,i )=> <AccordionItem
     title={el.title}
     num={i} key={el.title}
     curOpen={curOpen}
     onOpen={setCurOpen}
     >{el.text}</AccordionItem>)}
    
  </div>
)
}

function AccordionItem({num,title,curOpen,onOpen,children}){
  //const [isOpen, setIsOpen] = useState(false)
  const isOpen = num === curOpen
  function handleToggle(){
    //setIsOpen((isOpen)=>!isOpen)
    onOpen(isOpen ? null :num)
  }
return(
  <div className={`item ${isOpen ?'open': '' }`} onClick={handleToggle}>
    <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
    <p className="text">{title}</p>
    <p className="icon">{isOpen ? '-' : '+'}</p>
    {isOpen && <div className="content-box">{children}</div>}
  </div>
)
}




