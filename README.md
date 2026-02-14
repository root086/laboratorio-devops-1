# Containerização e Deploy na AWS (ECR & EC2)

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)

## 📌 Visão Geral
Este laboratório foca na solução do problema clássico "funciona na minha máquina" através da containerização e do deploy em nuvem pública. Implementei um pipeline manual de deploy para uma aplicação web, utilizando o **Amazon ECR** como registry de imagens e o **Amazon EC2** para computação.

> **Status do Projeto:** Laboratório concluído. A infraestrutura foi encerrada na AWS para otimização de custos, mantendo-se aqui o registro técnico da implementação.

---

## 🏗️ Arquitetura da Solução

O fluxo de dados e controle seguiu a seguinte hierarquia:

`Código Local (Dev)` ➔ `Docker Image (Build)` ➔ `Amazon ECR (Registry)` ➔ `Amazon EC2 (Prod)` ➔ `End User`



---

## 🛠️ Execução Técnica

### 1. Containerização (Docker)
Utilizei a imagem `nginx:alpine` por ser extremamente leve e segura, ideal para ambientes de produção.

**Dockerfile:**
```dockerfile
FROM nginx:alpine
# Copia os arquivos estáticos para o diretório padrão do Nginx
COPY app/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
