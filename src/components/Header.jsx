export default function Header({text,image,alternative}){
    return(
        <div id="headerWrapper"> 
        <img src={image} alt={alternative} />
        <h1>{text}</h1>
        </div>
    );
}