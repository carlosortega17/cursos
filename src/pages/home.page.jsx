import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <h4>Cursos de programacion</h4>
      </div>
      <div className="row justify-content-center">
        <Link to="/cursos/fundamentos" className="col-md-11 mt-2 mb-2 btn btn-primary text-left">
          Fundamentos de programacion
        </Link>
        <Link to="/cursos/c" className="col-md-11 mt-2 mb-2 btn btn-primary text-left">
          C - Fundamentos hasta estructuras
        </Link>
        <Link to="/cursos/cpp" className="col-md-11 mt-2 mb-2 btn btn-primary text-left">
          C++ - Fundamentos hasta POO (Programacion orientada a objetos)
        </Link>
        <Link to="/cursos/javascript" className="col-md-11 mt-2 mb-2 btn btn-primary text-left">
          Javascript - Fundamentos hasta Promesas
        </Link>
        <Link to="/cursos/dart" className="col-md-11 mt-2 mb-2 btn btn-primary text-left">
          Java - Fundamentos hasta Java Swing
        </Link>
      </div>
    </div>
  );
}
