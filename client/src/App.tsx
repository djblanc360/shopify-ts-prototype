import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '@pages/Home/HomePage'
import ProductPage from '@pages/Product/ProductPage'
// import Header from '@components/Header'
// import Footer from '@components/Footer'

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        {/* <Header /> */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Home route */}
            <Route path="/product/:id" element={<ProductPage />} /> {/* Dynamic product route */}
            {/* Add other routes as needed */}
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
