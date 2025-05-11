# Configurando o EmailJS para o Formulário de Contato

Para fazer seu formulário de contato funcionar completamente, siga estes passos:

## 1. Criar uma Conta no EmailJS

1. Acesse [EmailJS](https://www.emailjs.com/) e crie uma conta gratuita (permite até 200 emails por mês)
2. Faça login na sua conta

## 2. Conectar seu Serviço de Email

1. No painel do EmailJS, vá para "Email Services" e clique em "Add New Service"
2. Escolha seu provedor de email (Gmail, Outlook, etc.)
3. Siga as instruções para conectar sua conta de email
4. Anote o "Service ID" que será gerado

## 3. Criar um Template de Email

1. Vá para "Email Templates" e clique em "Create New Template"
2. Configure seu template de email. Você pode usar estes parâmetros:
   - `{{name}}` - Nome do remetente
   - `{{email}}` - Email do remetente
   - `{{message}}` - Mensagem enviada
3. Salve o template e anote o "Template ID"

## 4. Obter sua Chave Pública

1. Vá para "Account" > "API Keys"
2. Copie sua "Public Key"

## 5. Configurar no Código

Abra o arquivo `src/App.jsx` e localize estas linhas:

```javascript
const serviceId = 'YOUR_SERVICE_ID'
const templateId = 'YOUR_TEMPLATE_ID'
const publicKey = 'YOUR_PUBLIC_KEY'
```

Substitua com suas credenciais:

```javascript
const serviceId = 'service_xxxx' // Seu Service ID
const templateId = 'template_xxxx' // Seu Template ID
const publicKey = 'xxxxxxxx' // Sua Public Key
```

## 6. Configurar o Template

Certifique-se de que os nomes dos campos no seu formulário correspondam aos parâmetros no template:

- `name` para o nome
- `email` para o email
- `message` para a mensagem

Isso é tudo! Seu formulário de contato agora deve enviar emails diretamente para você quando alguém preencher o formulário.

## Limitações do Plano Gratuito

- 200 emails por mês
- EmailJS adiciona sua marca no rodapé dos emails
- Suporte limitado

Para mais informações, visite a [documentação do EmailJS](https://www.emailjs.com/docs/). 