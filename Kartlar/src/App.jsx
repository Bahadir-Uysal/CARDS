import 'bulma/css/bulma.css'
import './App.css'
import  {Course}  from './Course';
import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Ccsharp from './images/ccsharp.png';
import KompleWeb from './images/kompleweb.jpg';

function App() {
  return (
    <div className='App'>
      <section className="hero is-link">
        <div className="hero-body">
        <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className='container'>
        <section className='section'>
        <div className='columns'>
          <div className='column'>
          <Course 
            image = {Angular}
            title = "Anguler"
            description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam animi repellat molestiae. Recusandae, nihil dolorem. Quae quaerat similique suscipit ipsa." 
          />
          </div>
          <div className='column'>
          <Course
            image = {Bootstrap}
            title = "Bootstrap 5"
            description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam animi repellat molestiae. Recusandae, nihil dolorem. Quae quaerat similique suscipit ipsa." 
          />
          </div>
          <div className='column'>
          <Course
            image = {Ccsharp}
            title = "KompleWeb Kursu"
            description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam animi repellat molestiae. Recusandae, nihil dolorem. Quae quaerat similique suscipit ipsa." 
          />
          </div>
          <div className='column'>
          <Course
            image = {KompleWeb}
            title = "Frontend"
            description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam animi repellat molestiae. Recusandae, nihil dolorem. Quae quaerat similique suscipit ipsa." 
          />
          </div>
        </div>
        </section>
        
      </div>
    </div>
  );
}

export default App
