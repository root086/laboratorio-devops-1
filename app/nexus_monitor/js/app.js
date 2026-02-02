import { addLog } from './modules/logger.js';
import { updateCPU, updateNetwork, updateMemory, updateDisk } from './modules/metrics.js';

const REFRESH_RATE = 2000;
let intervalId;

function init() {
    addLog('Nexus Monitor v2.1 booting...', 'info');

    setTimeout(() => {
        addLog('Detecting Storage volumes (/dev/sda1)...', 'info');
    }, 800);

    setTimeout(() => {
        addLog('Allocating RAM pages...', 'info');
        addLog('System ONLINE.', 'success');
        startMonitoring();
    }, 1500);

    setupEventListeners();
}

function startMonitoring() {
    runMetrics();
    intervalId = setInterval(() => {
        runMetrics();

        // Simulação de Logs
        const dice = Math.random();
        if (dice > 0.95) addLog('Cron job [daily-backup] completed.', 'info');
        if (dice < 0.05) addLog('SSH auth attempt from 192.168.1.55', 'warn');

    }, REFRESH_RATE);
}

// Função auxiliar
function runMetrics() {
    updateCPU();
    updateNetwork();
    updateMemory();
    updateDisk();
}

document.addEventListener('DOMContentLoaded', init);