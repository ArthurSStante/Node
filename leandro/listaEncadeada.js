// Classe para criar os nós da lista
class Node {
    constructor(data) {
      this.data = data; // valor do nó
      this.next = null; // referência ao próximo nó
    }
  }
  
  // Classe para criar a lista encadeada
  class LinkedList {
    constructor() {
      this.head = null; // referência ao primeiro nó da lista
      this.size = 0; // tamanho da lista
    }
  
    // Método para adicionar um nó no final da lista
    add(data) {
      const node = new Node(data); // cria um novo nó
      let current; // variável para percorrer a lista
  
      if (this.head == null) { // se a lista estiver vazia
        this.head = node; // o novo nó é o primeiro da lista
      } else {
        current = this.head;
        while (current.next != null) { // percorre a lista até o final
          current = current.next;
        }
        current.next = node; // adiciona o novo nó ao final da lista
      }
  
      this.size++; // incrementa o tamanho da lista
    }
  
    // Método para remover um nó da lista
    remove(data) {
      let current = this.head;
      let previous = null;
  
      while (current != null) {
        if (current.data === data) {
          if (previous == null) {
            this.head = current.next; // remove o primeiro nó da lista
          } else {
            previous.next = current.next; // remove um nó no meio ou no final da lista
          }
          this.size--; // decrementa o tamanho da lista
          return current.data; // retorna o valor do nó removido
        }
        previous = current;
        current = current.next;
      }
  
      return null; // retorna nulo se o valor não foi encontrado na lista
    }
  
    // Método para buscar um nó na lista
    search(data) {
      let current = this.head;
  
      while (current != null) {
        if (current.data === data) {
          return current; // retorna o nó encontrado
        }
        current = current.next;
      }
  
      return null; // retorna nulo se o valor não foi encontrado na lista
    }
  
    // Método para imprimir os valores dos nós da lista
    print() {
      let current = this.head;
      let result = '';
  
      while (current != null) {
        result += current.data + ' -> ';
        current = current.next;
      }
  
      result += 'null';
      console.log(result); // imprime os valores dos nós da lista
    }
  }
  const list = new LinkedList();

  list.add(1);
  list.add(2);
  list.add(3);
  
  list.print(); // saída: "1 -> 2 -> 3 -> null"
  
  list.remove(2);
  
  list.print(); // saída: "1 -> 3 -> null"
  
  const node = list.search(1);
  
  console.log(node.data); // saída: 1
















  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    add(data) {
      const newNode = new Node(data);
  
      if (this.head === null) {
        this.head = newNode;
      } else {
        let currentNode = this.head;
        while (currentNode.next !== null) {
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
      }
      this.size++;
    }
  
    remove(data) {
      let currentNode = this.head;
      let previousNode = null;
  
      while (currentNode !== null) {
        if (currentNode.data === data) {
          if (previousNode === null) {
            this.head = currentNode.next;
          } else {
            previousNode.next = currentNode.next;
          }
          this.size--;
          return true;
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      return false;
    }
  
    print() {
      let currentNode = this.head;
      let result = '';
      while (currentNode !== null) {
        result += currentNode.data + ' ';
        currentNode = currentNode.next;
      }
      console.log(result.trim());
    }
  }
  
  const linkedList = new LinkedList();
  
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);
  
  linkedList.print(); // 1 2 3
  
  linkedList.remove(2);
  
  linkedList.print(); // 1 3