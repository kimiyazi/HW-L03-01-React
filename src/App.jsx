import ProductCard from "./assets/components/ProductCard";
import InputButton from "./assets/components/InputButton";
import UserList from "./assets/components/UserList";
import "./App.css";


const Products = [
  {
    name: "Galaxy S23 Ultra",
    price: 280000000,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, laborum odio. Porro placeat."
  },
  {
    name: "Galaxy S25 Ultra",
    price: 433000000,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, laborum odio. Porro placeat."
  },
  {
    name: "Galaxy S25 FE",
    price: 192000000,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, laborum odio. Porro placeat."
  }
];


const Users = [
  {
    name: "kimiya",
    age: 30 ,
    city: "Tehran"
  },
  {
    name: "Marjan",
    age: 34 ,
    city: "Shiraz"
  },
  {
    name: "Mohsen",
    age: 35 ,
    city: "Tabriz"
  }
];



function App() {
  return (
  <>
    <div className="products">
    {Products.map((item, index)=>{
      return (
        <ProductCard
          key={index}
          name = {item.name}
          price= {item.price}
          description= {item.description}
        />
      )
    })}
    </div>
    <div className="InputButton">
      <InputButton />
    </div>

    <UserList users={Users}/>
  </>  
  );
}

export default App;