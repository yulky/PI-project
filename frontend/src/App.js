import React from 'react';
import './App.css';

function App() {
  // Функция для получения всех шоу
  const fetchAllShows = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/show', );
      console.log('Ответ сервера:', response);
  
      // Проверяем, что ответ успешный
      if (!response.ok) {
        throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`);
      }
  
      // Проверяем, что ответ является JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Ответ не является JSON');
      }
  
      const data = await response.json();
      console.log('Все шоу:', data);
    } catch (error) {
      console.error('Ошибка при получении шоу:', error);
    }
  };
  

  // Функция для добавления шоу
  const addShow = async () => {
    try {
      const response = await fetch('https://localhost:5001/api/show', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Новое шоу',
          category: 'Драма',
          // Добавьте другие поля, если необходимо
        }),
      });
      const data = await response.json();
      console.log('Добавленное шоу:', data);
    } catch (error) {
      console.error('Ошибка при добавлении шоу:', error);
    }
  };

  // Функция для получения шоу по ID
  const fetchShowById = async () => {
    const showId = 1; // Замените на нужный ID
    try {
      const response = await fetch(`https://your-api-endpoint/shows/${showId}`);
      const data = await response.json();
      console.log('Шоу по ID:', data);
    } catch (error) {
      console.error('Ошибка при получении шоу по ID:', error);
    }
  };

  // Функция для удаления шоу по ID
  const deleteShowById = async () => {
    const showId = 1; // Замените на нужный ID
    try {
      const response = await fetch(`https://your-api-endpoint/shows/${showId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Шоу успешно удалено');
      } else {
        console.error('Ошибка при удалении шоу');
      }
    } catch (error) {
      console.error('Ошибка при удалении шоу:', error);
    }
  };

  // Функция для получения всех категорий шоу
  const fetchCategories = async () => {
    try {
      const response = await fetch('https://your-api-endpoint/categories'); // Замените на ваш URL
      const data = await response.json();
      console.log('Категории шоу:', data);
    } catch (error) {
      console.error('Ошибка при получении категорий:', error);
    }
  };

  // Функция для создания заказа
  const createOrder = async () => {
    try {
      const response = await fetch('https://your-api-endpoint/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          showId: 1,
          quantity: 2,
          // Добавьте другие поля, если необходимо
        }),
      });
      const data = await response.json();
      console.log('Созданный заказ:', data);
    } catch (error) {
      console.error('Ошибка при создании заказа:', error);
    }
  };

  // Функция для удаления заказа
  const deleteOrder = async () => {
    const orderId = 1; // Замените на нужный ID
    try {
      const response = await fetch(`https://your-api-endpoint/orders/${orderId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Заказ успешно удален');
      } else {
        console.error('Ошибка при удалении заказа');
      }
    } catch (error) {
      console.error('Ошибка при удалении заказа:', error);
    }
  };

  // Функция для получения всех шоу категории
  const fetchShowsByCategory = async () => {
    const categoryId = 1; // Замените на нужный ID категории
    try {
      const response = await fetch(`https://your-api-endpoint/categories/${categoryId}/shows`);
      const data = await response.json();
      console.log('Шоу категории:', data);
    } catch (error) {
      console.error('Ошибка при получении шоу категории:', error);
    }
  };

  return (
    <div className="App">
      <button onClick={fetchAllShows}>показать все шоу</button>
      <button onClick={addShow}>добавить шоу</button>
      <button onClick={fetchShowById}>получить шоу по айди</button>
      <button onClick={deleteShowById}>удалить шоу по айди</button>
      <button onClick={fetchCategories}>показать категории шоу</button>
      <button onClick={createOrder}>создать заказ</button>
      <button onClick={deleteOrder}>удалить заказ</button>
      <button onClick={fetchShowsByCategory}>получить все шоу категории</button>
    </div>
  );
}

export default App;