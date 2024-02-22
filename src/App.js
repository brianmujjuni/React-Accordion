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
return(
  <div className="accordion">
    {data.map((el,i )=> <AccordionItem title={el.title} text={el.text} num={i}/>)}
    
  </div>
)
}

function AccordionItem({num,title,text}){
return(
  <div className="item">
    <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
    <p className="text">{title}</p>
    <p className="icon">-</p>
    <div className="content-box">{text}</div>
  </div>
)
}




