# Configuração do Tailwindcss

### Instalação (Não necessário)

```
npm i -g @tailwindcss/cli
```

Realize um teste no terminal e com o comando **tailwindcss --help** e verifique a versão. Nesse caso estou instalando globalmente onde em qualquer lugar e terminal não terá problemas em chama-lo.

### Uso

Na raiz do seu projeto ReactJS crie o arquivo *tailwind.config.js* e adicione as seguintes configurações:

```
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Agora no arquivo css raiz do projeto (normalmente index.css) adicione esse comando no inicio do arquivo:

```
@tailwind utilities;
```

Com isso o Tailwind deve está devidamente condifigurado em seu projeto. Para uma melhor experiência recomendo a instalação da extensão do Tailwind no VSCode.

---

Versão do ReactJS: v19

Versão do Typescript: v4.9.5

Versão do NodeJS: v22.13.1