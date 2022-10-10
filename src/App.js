import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import Todo from './pages/Todo/Todo';
import TodoForm from './pages/TodoForm/TodoForm';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/createToDo" element={<TodoForm />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
