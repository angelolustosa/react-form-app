# React + Vite

## Criar o Projeto

```shell
npm create vite@latest
```

<img width="897" height="591" alt="image" src="https://github.com/user-attachments/assets/826a27ef-3397-4908-b173-088901fbe96b" />

## Subir o projeto para o git

1. Iniciar o projeto
```shell
git init
```
<img width="719" height="65" alt="image" src="https://github.com/user-attachments/assets/eb6c69d3-4a7f-4083-b246-2d5f596fd66f" />


2. Relacionar a pasta(que ainda não é um repositorio) ao repositorio remoto
```shell
git remote add origin https://github.com/angelolustosa/react-form-app.git
```
<img width="842" height="44" alt="image" src="https://github.com/user-attachments/assets/feca1284-89a8-4aad-9e9d-ebd4b0738675" />


3. Definir a branch main como principal
```shell
git branch -M main
```

<img width="355" height="39" alt="image" src="https://github.com/user-attachments/assets/fdd40a35-054f-445c-9f6d-b04c27fe5970" />

4. Adicionar os arquivos para o repositório
```shell
git add .
```

<img width="1197" height="300" alt="image" src="https://github.com/user-attachments/assets/96121b30-e1ca-440f-ad99-818ab2730a13" />

5. Preparar os arquivos
```shell
git commit -m "inicio do projeto"
```

<img width="706" height="395" alt="image" src="https://github.com/user-attachments/assets/cad863d2-d106-4253-a75e-12334b6144e3" />

6. Subir as alterações (Salvar no git)
```shell
git push
```

<img width="960" height="234" alt="image" src="https://github.com/user-attachments/assets/c85fd012-a896-4f02-9139-8a79463cbf29" />

7. Setar a branch local no repositorio remoto e subir as alterações 

```shell
git push -u origin main
```

<img width="770" height="278" alt="image" src="https://github.com/user-attachments/assets/4d7dc939-f467-4f43-9127-4d50d8716d34" />

### Instalação do Bootstrap

Fonte: [https://react-bootstrap.netlify.app/docs/getting-started/introduction](https://react-bootstrap.netlify.app/docs/getting-started/introduction)



### Plugins GitHub

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
