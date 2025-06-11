class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let ch of word) {
            if (!node.children[ch]) {
                node.children[ch] = new TrieNode();
            }
            node = node.children[ch];
        }
        node.isEndOfWord = true;
        return null; // to match expected output
    }

    search(word) {
        let node = this.root;
        for (let ch of word) {
            if (!node.children[ch]) {
                return false;
            }
            node = node.children[ch];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let ch of prefix) {
            if (!node.children[ch]) {
                return false;
            }
            node = node.children[ch];
        }
        return true;
    }
}

// Example usage:
const output = [];

const trie = new Trie();
output.push(null);                         
output.push(trie.insert("apple"));         
output.push(trie.search("apple"));          
output.push(trie.search("app"));           
output.push(trie.startsWith("app"));        
output.push(trie.insert("app"));            
output.push(trie.search("app"));            

console.log(output);  
