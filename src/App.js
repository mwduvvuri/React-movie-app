import logo from './logo.svg';
import './App.css';

function App() {
  const names =[
    {
      name:"Krishna",
      pic:"https://images.unsplash.com/flagged/photo-1571837360114-edf5dba7b1dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80",
     },
     { 
       name:"Meher",
       pic:"https://www.teahub.io/photos/full/50-508416_animated-boy-wallpapers-group-cartoon-handsome-boy-images.jpg",
      },
     {
       name:"Sreenu",
      pic:"https://wallpapercave.com/wp/wp8295906.jpg"
    },
     {
       name:"Kiara",
     pic:"https://i.pinimg.com/736x/29/d6/4e/29d64e6f951bb0c4a649f978c24a1406.jpg"
    },

    {
      name:"Roshni",
      pic:"https://1.bp.blogspot.com/-khyijBrTKFk/X3r_DJ-pBhI/AAAAAAAAAto/6LuNz3Rqu64X30fISOMHGp293DLj_9OlwCLcBGAsYHQ/w1200-h630-p-k-no-nu/100%252B%2BCute%2BGirl%2BPic%2B2020%2BDownload%2BNow.jpg",
    },
    ];
  return (
    <div className="App">
      
      {names.map((names) => (
      <Message name={names.name} pic={names.pic} />
      ))};
    </div>
  );
  //JSX ends
}

//Props are the way to pass arguments through components.
//This is the shortcut of properties.

export default App;
//Create component
//function -> component
//1. First letter should be capital
//2. It should return only one JSX element.

function Message({pic,name}){
  return (
  <div>
    {/* if we don't want to put any div. 
    Then we can put react fragment, which is <> </>.
     The empty braces. */}
  <img 
  className="profile-pic"
  src={pic} alt={name}/>
  <h1>Hello {name} 🥰🥰😍</h1>
  </div>
  )
}