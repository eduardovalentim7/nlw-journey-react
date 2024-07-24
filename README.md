
nlw


Criar o projeto
### npm install vite@latest

### npm i



rodar o projeto:
### npm run dev

Todas as funções que retornam componentes sejam iniciadas em Maiúsculo 
nome do arquivo do componente em minusculo

Não usar export default
Colocar: export function App()
import {App}..
Chama-se: named exports

Após isso instala o tailwind css

### npm install -D tailwindcss postcss autoprefixer
### npx tailwindcss init -p

Altera o tailwind.config

Cria um arquivo: index.css
e cola:
@tailwind base;
@tailwind components;
@tailwind utilities;

importa lá no main

Extensoes do tailwind
 - Tailwind css inteliSense
 - PostCSS Language Support


 Biblioteca de Ícones
 ### npm i lucide-react
 depois importa no componente

 import {MapPin, Calendar } from 'lucide-react'
 ### lá no código: <MapPin />


 ROTEAMENTO NO REACT

 ### npm i react-router-dom
### npm install localforage match-sorter sort-by

cria uma pasta "pages" no src



***********************************************************************
Propriedades no react
Permite o envio de variáveis de um componente pai para um componente filho

parou no 56