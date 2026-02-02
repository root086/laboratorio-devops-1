import { getRandom } from './utils.js';
import { addLog } from './logger.js';

// CPU
export function updateCPU() {
    const cpuVal = getRandom(5, 90);
    const cpuText = document.getElementById('cpu-val');
    const cpuBar = document.getElementById('cpu-bar');
    const indicator = document.getElementById('cpu-status');
    
    cpuText.innerHTML = `${cpuVal}<span class="metric-unit">%</span>`;
    cpuBar.style.width = `${cpuVal}%`;

    // Lógica de Alerta
    if (cpuVal > 85) {
        cpuBar.style.backgroundColor = 'var(--danger)';
        indicator.style.backgroundColor = 'var(--danger)';
        indicator.style.boxShadow = '0 0 10px var(--danger)';
        if(Math.random() > 0.7) addLog(`WARNING: High CPU Load: ${cpuVal}%`, 'warn');
    } else {
        cpuBar.style.backgroundColor = 'var(--accent)';
        indicator.style.backgroundColor = 'var(--success)';
        indicator.style.boxShadow = '0 0 8px var(--success)';
    }
}

// MEMÓRIA
export function updateMemory() {
    const totalMem = 16; 
    const usedMem = (Math.random() * (14 - 4) + 4).toFixed(1); 
    const percentage = (usedMem / totalMem) * 100;

    const memText = document.getElementById('mem-val');
    const memBar = document.getElementById('mem-bar');
    
    memText.innerHTML = `${usedMem}<span class="metric-unit">GB</span>`;
    memBar.style.width = `${percentage}%`;
}

// DISCO
export function updateDisk() {
    const baseUsage = 65; 
    const variation = getRandom(-2, 5);
    const currentUsage = baseUsage + variation;
    
    const diskText = document.getElementById('disk-val');
    const diskBar = document.getElementById('disk-bar');
    const diskDetails = document.getElementById('disk-details');

    diskText.innerHTML = `${currentUsage}<span class="metric-unit">%</span>`;
    diskBar.style.width = `${currentUsage}%`;
    
    const totalDisk = 512;
    const freeSpace = Math.floor(totalDisk - (totalDisk * (currentUsage/100)));
    diskDetails.innerText = `Livre: ${freeSpace} GB`;
}

// REDE
export function updateNetwork() {
    const reqVal = document.getElementById('req-val');
    let currentReq = parseInt(reqVal.innerText) || 824;
    
    let variation = getRandom(-10, 15);
    let newReq = currentReq + variation;
    if(newReq < 0) newReq = 0;
    
    reqVal.innerText = newReq;

    const latVal = document.getElementById('latency-val');
    const latency = getRandom(15, 90);
    latVal.innerText = latency + 'ms';
    
    if(latency > 80) latVal.style.color = 'var(--warning)';
    else latVal.style.color = 'var(--success)';
}