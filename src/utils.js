import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export function notifyOK(message) {
    Toastify({
        text: message,
        duration: 3000,
        gravity: 'bottom',
        position: 'left',
        style: {
            background: 'green'
        }
    }).showToast();
}


export function notifyKO(message) {
    Toastify({
        text: message,
        duration: 3000,
        gravity: 'bottom',
        position: 'left',
        style: {
            background: 'red'
        }
    }).showToast();
}


export const config = {
  apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:8080',
  appEnv: process.env.APP_ENV || 'development'
};