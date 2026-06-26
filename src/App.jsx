function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#F8FAFC",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ color: "#2563EB", fontSize: "48px" }}>
        QAI One
      </h1>

      <p>One Platform. Infinite Quality.</p>

      <button
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          background: "#2563EB",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Enter
      </button>
    </div>
  );
}

export default App;
