class Queue {
  constructor() {
    this.items = [];
  }

  // adiciona um elemento ao final da fila
  enqueue(element) {
    this.items.push(element);
  }

  // remove um elemento do início da fila
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  // retorna o primeiro elemento da fila
  front() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[0];
  }

  // verifica se a fila está vazia
  isEmpty() {
    return this.items.length == 0;
  }

  // retorna o tamanho da fila
  size() {
    return this.items.length;
  }

  // imprime todos os elementos da fila
  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

// exemplo de uso
let queue = new Queue();

console.log(queue.isEmpty()); // true

queue.enqueue("John");
queue.enqueue("Peter");
queue.enqueue("Mark");

console.log(queue.printQueue()); // "John Peter Mark"

console.log(queue.size()); // 3

console.log(queue.front()); // "John"

console.log(queue.dequeue()); // "John"

console.log(queue.printQueue()); // "Peter Mark"















class Fila {
  constructor() {
    this.fila = []; // Cria um array vazio para armazenar os elementos da fila
  }

  // Adiciona um elemento no final da fila
  enqueue(elemento) {
    this.fila.push(elemento);
  }

  // Remove e retorna o primeiro elemento da fila
  dequeue() {
    return this.fila.shift();
  }

  // Retorna o tamanho da fila
  tamanho() {
    return this.fila.length;
  }

  // Retorna o primeiro elemento da fila sem removê-lo
  primeiro() {
    return this.fila[0];
  }

  // Retorna true se a fila estiver vazia, ou false caso contrário
  vazia() {
    return this.fila.length === 0;
  }
}
const minhaFila = new Fila();

minhaFila.enqueue('A');
minhaFila.enqueue('B');
minhaFila.enqueue('C');

console.log(minhaFila.tamanho()); // Saída: 3
console.log(minhaFila.primeiro()); // Saída: "A"

minhaFila.dequeue();

console.log(minhaFila.tamanho()); // Saída: 2
console.log(minhaFila.primeiro()); // Saída: "B"

console.log(minhaFila.vazia()); // Saída: false
