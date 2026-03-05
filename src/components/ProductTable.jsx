import {useEffect, useState, useRef, useCallback} from "react";

function ProductTable(){

  // state variables
const [products,setProducts] = useState([]);
const [skip, setSkip] = useState(0);
const [loading, setLoading] = useState(false);
const [hasMore, setHasMore] = useState(true);

//reference 
const loaderRef = useRef(null);

//functions 
const handleTitleChange = (id, newTitle) => {
  setProducts((prev) =>
    prev.map((p) => (p.id === id ? { ...p, title: newTitle } : p))
  );
};

const fetchMore = useCallback(async() => {
  if(loading || !hasMore) return;
  setLoading(true);

  try{
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${skip}`
    );

    const data = await res.json();

    setProducts((prev) => [...prev, ...data.products]);
    setSkip((prev) => prev+10);

    if(skip+10 >= data.total){
      setHasMore(false);
    }
  } 
  catch (error){
    console.error(error);
  }
  finally{
    setLoading(false);
  }
}, [skip,loading,hasMore]);

//use effect 
 useEffect(()=>{
   fetchMore();
 },[]);

 //intersection observer 
useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchMore();
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();

  }, [fetchMore]);


 return(
  <>
    <p style={{ marginBottom: "10px", opacity: 0.8 }}>
      Showing {products.length} products
    </p>
   <table style={{
    width:"100%", borderCollapse: "collapse"
   }}>
     <thead>
       <tr>
         <th style={{borderBottom:"1px solid #ddd", padding:"8px"}}>Title</th>
         <th style={{borderBottom:"1px solid #ddd", padding:"8px"}}>Brand</th>
         <th style={{borderBottom:"1px solid #ddd", padding:"8px"}}>Category</th>
         <th style={{borderBottom:"1px solid #ddd", padding:"8px"}}>Price</th>
         <th style={{borderBottom:"1px solid #ddd", padding:"8px"}}>Rating</th>
       </tr>
     </thead>

     <tbody>
       {products.map(product => (
         <tr key={product.id} style={{transition: "background 0.2s"}}>
           <td style={{padding:"8px"}}>
            <input value={product.title} 
            onChange={(e) => handleTitleChange(product.id, e.target.value)}
            style={{
              width: "100%",
              padding: "6px",
              borderRadius: "5px",
              border: "1px solid #555",
              background: "#1e1e1e",
              color: "white"
            }}
            />
            </td>
           <td style={{padding:"12px"}}>{product.brand}</td>
           <td style={{padding:"12px"}}>{product.category}</td>
           <td style={{padding:"12px"}}>{product.price}</td>
           <td style={{padding:"12px"}}>{product.rating}</td>
         </tr>
       ))}
     </tbody>
   </table>
   <div ref={loaderRef} style={{ height: "1px" }} />
      {loading && <p style={{marginTop: "8px", opacity: 0.75}}>Loading...</p>}
      {!hasMore && <p>No more products.</p>}
      </>
 );

}

export default ProductTable;