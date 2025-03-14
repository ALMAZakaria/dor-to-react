import React from 'react';
import ClickCounter from '../components/ClickCounter';
import TodoList from '../components/TodoList';

function Home() {
  return (
    <div >
      <h1 className="text-center mb-4 mt-5">Welcome to Our App</h1>
      <p className="lead mb-5">This is a simple React application with two interactive components.</p>
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0">Click Counter</h2>
            </div>
            <div className="card-body">
              <ClickCounter />
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header bg-light">
              <h2 className="h5 mb-0">Todo List</h2>
            </div>
            <div className="card-body">
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;