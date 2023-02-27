let workerRegistration = undefined;
let addressBox = document.getElementById('addressBox');
let browser = document.getElementById('browser');
let hash = undefined;
const socket = new WebSocket('ws://localhost:8080/sockjs-node/edge/routine/websocket');

function visit(url) {
  addressBox.value = url;
  if (hash) {
    browser.src = url;
  }
}

function handleWSChange() {
  if (workerRegistration) {
    workerRegistration.update().then(() => {
      setTimeout(() => {
        visit(addressBox.value);
      }, 0);
    });
  }
}

navigator.serviceWorker.register('/edge.js').then((registration) => {
  workerRegistration = registration;
});

window.addEventListener('unload', () => {
  workerRegistration.unregister();
});

socket.onmessage = (e) => {
  if (e.data && e.data.startsWith('a[') && e.data.endsWith(']')) {
    const raw = e.data.substr(2, e.data.length - 3);
    const data = JSON.parse(JSON.parse(raw));
    if (data.type === 'hash') {
      if (hash !== data.data) {
        hash = data.data;
        handleWSChange();
      }
    }
  }
};

addressBox.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    visit(addressBox.value);
  }
});

function executeQuery(query, operationName, variables) {
  return fetch('/graphql', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      operationName,
      variables
    }),
  }).then((res) => res.json());
}

visit('http://localhost:8080/graphql');
