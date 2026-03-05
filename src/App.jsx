import ProductTable from "./components/ProductTable";

function App() {

  return(
    <div style={{
      minHeight:"100vh", background: "#1e1e1e", padding: "30px"
    }}
    >
      <h1 style={{marginBottom: "20px"}}></h1>

      <div style={{
        background: "#2a2a2a", padding: "20px", borderRadius: "10x", boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
      }}>
        <ProductTable/>
      </div>
    </div>
  );
}

export default App;
