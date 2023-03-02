class Pilha {
    constructor() {
      this.items = []; // Cria uma array para armazenar os elementos da pilha
    }
  
    // Adiciona um novo elemento ao topo da pilha
    push(element) {
      this.items.push(element);
    }
  
    // Remove o elemento do topo da pilha e o retorna
    pop() {
      if (this.items.length === 0) {
        return "Underflow"; // Verifica se a pilha está vazia
      }
      return this.items.pop();
    }
  
    // Retorna o elemento do topo da pilha sem removê-lo
    peek() {
      return this.items[this.items.length - 1];
    }
  
    // Verifica se a pilha está vazia
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Retorna o tamanho da pilha
    size() {
      return this.items.length;
    }
  
    // Remove todos os elementos da pilha
    clear() {
      this.items = [];
    }
  }

  let minhaPilha = new Pilha(); // Cria uma nova pilha
minhaPilha.push(1); // Adiciona o número 1 ao topo da pilha
minhaPilha.push(2); // Adiciona o número 2 ao topo da pilha
console.log(minhaPilha.peek()); // Imprime o número 2, sem removê-lo da pilha
console.log(minhaPilha.pop()); // Imprime o número 2, removendo-o da pilha
console.log(minhaPilha.isEmpty()); // Imprime false, já que ainda há um elemento na pilha
console.log(minhaPilha.size()); // Imprime 1, indicando que há um elemento na pilha
minhaPilha.clear(); // Remove todos os elementos da pilha
console.log(minhaPilha.isEmpty()); // Imprime true, já que a pilha está vazia











class Pilha {
    constructor() {
      this.items = []; // cria um array vazio para armazenar os itens da pilha
    }
  
    // adiciona um elemento ao topo da pilha
    push(item) {
      this.items.push(item);
    }
  
    // remove e retorna o elemento no topo da pilha
    pop() {
      if (this.items.length === 0) {
        return null; // retorna null se a pilha estiver vazia
      }
      return this.items.pop();
    }
  
    // retorna o elemento no topo da pilha sem removê-lo
    peek() {
      if (this.items.length === 0) {
        return null; // retorna null se a pilha estiver vazia
      }
      return this.items[this.items.length - 1];
    }
  
    // retorna true se a pilha estiver vazia, caso contrário, retorna false
    isEmpty() {
      return this.items.length === 0;
    }
  
    // remove todos os elementos da pilha
    clear() {
      this.items = [];
    }
  
    // retorna o número de elementos na pilha
    size() {
      return this.items.length;
    }
  }
  
  // Exemplo de uso:
  const pilha = new Pilha();
  pilha.push(1);
  pilha.push(2);
  pilha.push(3);
  console.log(pilha.peek()); // retorna 3
  console.log(pilha.pop()); // retorna 3
  console.log(pilha.peek()); // retorna 2
  console.log(pilha.size()); // retorna 2
  pilha.clear();
  console.log(pilha.isEmpty()); // retorna true