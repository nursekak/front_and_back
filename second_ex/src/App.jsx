
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

export default function App() {
  return (
    <main className="container py-4">
      <h1 className="text-center mb-4">Привет, мир!</h1>
      
      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <div className="content-block">
            <h2>Первая колонка</h2>
            <p>Это текст первой колонки. Здесь может быть любое содержимое.</p>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3">
          <div className="content-block">
            <h2>Вторая колонка</h2>
            <p>Это текст второй колонки. Здесь может быть любое содержимое.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="custom-button">Нажми меня</button>
      </div>
    </main>
  );
}
