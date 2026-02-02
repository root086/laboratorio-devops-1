import { getCurrentTime } from './utils.js';

const logsContainer = document.getElementById('logs');

export function addLog(message, type = 'info') {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    
    let colorClass = '';
    if(type === 'warn') colorClass = 'log-warn';
    if(type === 'error') colorClass = 'log-error';

    entry.innerHTML = `
        <span class="log-timestamp">[${getCurrentTime()}]</span> 
        <span class="${colorClass}">${message}</span>
    `;
    logsContainer.prepend(entry);

    if (logsContainer.children.length > 50) {
        logsContainer.removeChild(logsContainer.lastChild);
    }
}