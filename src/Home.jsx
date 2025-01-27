import TodoList from "./TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <main className="main-container d-flex justify-content-center align-items-center">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            {/* Card with glowing effect */}
            <div className="card shadow custom-glow">
              <div className="card-body">
                <TodoList />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom glow effect to the main container */}
      
    </main>
  );
}
