---
id: csharp-conceitos-metodos
title: Métodos
sidebar_position: 100
---

# Métodos no ambito de C#

Um método é um bloco de código que contém uma série de instruções. Um programa faz com que as instruções sejam executadas chamando o método e especificando os argumentos de método necessários. No C#, todas as instruções executadas são realizadas no contexto de um método. O método Main é o ponto de entrada para todos os aplicativos C# e é chamado pelo CLR (Common Language Runtime) quando o programa é iniciado.

## Assinaturas de método

Os métodos são declarados em class, record ou struct especificando:

* Um nível de acesso opcional, como public ou private. O padrão é private.
* Modificadores opcionais como abstract ou sealed.
* O valor retornado ou void se o método não tiver nenhum.
* O nome do método.
* Quaisquer parâmetros de método. Os parâmetros de método estão entre parênteses e separados por vírgulas. Parênteses vazios indicam que o método não requer parâmetros.