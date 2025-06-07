# 🍖 Seu Sabor - Loja de Alimentos (Django Teste)

Este projeto é um protótipo de um site de vendas de alimentos, desenvolvido com **Python** e o framework **Django**. Ele serve como um exemplo básico de uma aplicação web com páginas de Início, Contato e Sobre, e é ideal para fins de estudo e aprendizado de Django.

---

## 🚀 Tecnologias Utilizadas

* **Python 3.x**: Linguagem de programação principal.
* **Django 5.x**: Framework web de alto nível para desenvolvimento rápido e seguro.
* **HTML5**: Estrutura das páginas web.
* **CSS3**: Estilização e layout do site.
* **JavaScript**: Interatividade no lado do cliente (ex: carrinho de compras simplificado).
* **SQLite3**: Banco de dados padrão para desenvolvimento.

---

## ✨ Funcionalidades (Versão de Teste)

* **Página Inicial (`/`)**: Apresenta os produtos em destaque e uma chamada para ação.
* **Página de Contato (`/contato/`)**: Formulário de contato básico e informações de contato.
* **Página Sobre (`/sobre/`)**: Informações sobre a loja e sua missão.
* **Adicionar ao Carrinho (Básico)**: Botão nos produtos que exibe um alerta simulando a adição ao carrinho (funcionalidade completa de carrinho não implementada nesta versão).
* **Navegação Responsiva**: (A ser implementado/melhorado com Media Queries no CSS para dispositivos móveis).

---

## 🛠️ Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar e executar o projeto em sua máquina:

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/EsterHad146/Django.git](https://github.com/EsterHad146/Django.git)
    cd Django # Entre na pasta do projeto
    ```

2.  **Crie e Ative um Ambiente Virtual (Recomendado):**
    ```bash
    python -m venv venv
    # No Windows:
    .\venv\Scripts\activate
    # No macOS/Linux:
    source venv/bin/activate
    ```

3.  **Instale as Dependências:**
    ```bash
    pip install Django
    ```
    *(Se o projeto tiver um `requirements.txt` futuramente, use `pip install -r requirements.txt`)*

4.  **Aplique as Migrações do Banco de Dados:**
    ```bash
    python manage.py migrate
    ```

5.  **Crie um Superusuário (Opcional, para acessar o painel Admin):**
    ```bash
    python manage.py createsuperuser
    ```
    Siga as instruções para criar um nome de usuário, e-mail e senha.

6.  **Execute o Servidor de Desenvolvimento:**
    ```bash
    python manage.py runserver
    ```

7.  **Acesse o Site:**
    Abra seu navegador e acesse: `http://127.0.0.1:8000/`

---

## 📂 Estrutura do Projeto

seu-site-de-alimentos/
├── churras/                 # Pasta principal do projeto Django
│   ├── init.py
│   ├── asgi.py
│   ├── settings.py          # Configurações do projeto
│   ├── urls.py              # URLs principais do projeto
│   └── wsgi.py
├── core/                    # Seu aplicativo Django principal para o site
│   ├── migrations/
│   ├── init.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py            # Modelos de dados (se houver)
│   ├── tests.py
│   └── views.py             # Lógica das páginas
├── templates/               # Pasta para templates HTML globais
│   ├── index.html
│   ├── contato.html
│   └── sobre.html
├── static/                  # Pasta para arquivos estáticos (CSS, JS, Imagens)
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── img/                 # Suas imagens de produtos, hero, etc.
│       ├── hero-bg.jpg
│       ├── produto1.jpg
│       └── produto2.jpg
├── manage.py                # Utilitário de linha de comando do Django
├── db.sqlite3               # Banco de dados SQLite3 (gerado automaticamente)
└── README.md                # Este arquivo

---

## 🚧 Próximos Passos e Possíveis Melhorias

* **Sistema de Carrinho Completo**: Implementar adição, remoção, visualização e finalização de pedidos.
* **Catálogo de Produtos Dinâmico**: Gerenciar produtos através do painel de administração Django e exibi-los dinamicamente.
* **Autenticação de Usuários**: Sistema de login/cadastro para clientes.
* **Pagamento Online**: Integração com gateways de pagamento.
* **Responsividade Avançada**: Otimizar a interface para todos os dispositivos.
* **Testes Automatizados**: Escrever testes para as funcionalidades críticas.
* **Deploy para Produção**: Configurar o projeto para ser executado em um ambiente de produção (ex: Gunicorn/uWSGI + Nginx/Apache + PostgreSQL).

---

## 🤝 Contribuição

Contribuições são bem-vindas! Se você tem sugestões ou melhorias, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

---

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença [MIT License](https://opensource.org/licenses/MIT).

---

## 📞 Contato

Para dúvidas ou sugestões, entre em contato com Ester Hadassa:
* GitHub: [@EsterHad146](https://github.com/EsterHad146)
* Email: [seu.email@exemplo.com] (Opcional: substitua pelo seu email)

---
