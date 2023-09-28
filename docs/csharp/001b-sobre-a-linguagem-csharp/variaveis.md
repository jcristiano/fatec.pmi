---
id: csharp-conceitos-variaveis-abordagem
title: Variáveis
sidebar_position: 99
---

# Sobre variáveis

Na maioria dos programas que escrevemos, não estamos interessados em apenas mostrar uma caixa de mensagens para o usuário. Queremos também armazenar e processar informações.

Em um sistema bancário, por exemplo, estaríamos interessados em armazenar o saldo de uma conta e o nome do correntista. Para armazenar esses dados, precisamos pedir para o C# reservar regiões de memória que serão utilizadas para armazenar informações. Essas regiões de memória são conhecidas como variáveis.

As variáveis guardam informações de um tipo específico. Podemos, por exemplo, guardar um número inteiro representando o número da conta, um texto para representar o nome do correntista ou um número real para representar o saldo atual da conta. Para utilizar uma variável, devemos primeiramente declará-la no texto do programa.

Na declaração de uma variável, devemos dizer seu tipo (inteiro, texto ou real, por exemplo) e, além disso, qual é o nome que usaremos para referenciá-la no texto do programa. Para declarar uma variável do tipo inteiro que representa o número de uma conta, utilizamos o seguinte código:

```csharp
    int numeroDaConta;
```

Repare no ";" no final da linha. Como a declaração de uma variável é um comando da linguagem C#, precisamos do ";" para terminá-lo.

Além do tipo "int" (para representar inteiros), temos também os tipos "double" e "float" (para números reais), "string" (para textos), entre outros.

Depois de declarada, uma variável pode ser utilizada para armazenar valores. Por exemplo, se estivéssemos interessados em guardar o valor "1" na variável "numeroDaConta" que declaramos anteriormente, utilizaríamos o seguinte código:

```csharp
    int numeroDaConta = 1;
```

Lê-se "numeroDaConta recebe 1". Quando, no momento da declaração da variável, sabemos qual será seu valor, podemos utilizar a seguinte sintaxe para declarar e atribuir o valor para a variável:

```csharp
    double saldo = 100.0;
```

## Operações com variáveis

Agora que já sabemos como guardar informações no programa, estamos interessados em executar operações nesses valores. Pode ser interessante para um correntista saber qual será o saldo de sua conta após um saque de 10 reais. Para realizar essa operação, devemos subtrair 10 reais do saldo da conta:

```csharp
    double saldo = 100.0;
    saldo = saldo - 10.0;
```

Nesse código, estamos guardando na variável "saldo" o valor da conta (100.0, saldo antigo) menos 10.0, então seu valor final será de 90.0. Da mesma forma que podemos subtrair valores, podemos também fazer somas (com o operador "+"), multiplicações (operador "*") e divisões (operador "/").

Podemos ainda guardar o valor do saque em uma variável:

```csharp
double saldo = 100.0;
double valorDoSaque = 10.0;
saldo = saldo - valorDoSaque;
```

Depois de realizar o saque, queremos mostrar para o usuário qual é o saldo atual da conta. Para mostrarmos essa informação, utilizaremos novamente o "MessageBox.Show":

```csharp
MessageBox.Show("O saldo da conta após o saque é: " + saldo);
```

Note que, no código do saque, estamos repetindo o nome da variável "saldo" dos dois lados da atribuição. Quando temos esse tipo de código, podemos utilizar uma abreviação disponibilizada pelo C#, o operador "-=":

```csharp
double saldo = 100.0;
double valorDoSaque = 10.0;
saldo -= valorDoSaque;
```

Quando o compilador do C# encontra o "saldo -= valorDoSaque", essa linha é traduzida para a forma que vimos anteriormente: "saldo = saldo - valorDoSaque". Além do "-=", temos também os operadores "+=" (para somas), "*=" (para multiplicações) e "/=" (para divisões).


## Tipos primitivos

Vimos que no C# toda variável possui um tipo, utilizamos o `int` quando queremos armazenar valores inteiros e `double` para números reais. Agora vamos descobrir quais são os outros tipos de variáveis do C#.

| Tipo  | Tamanho   | Valores Possíveis                                  |
|-----------|-----------|---------------------------------------------------|
| **bool**  | 1 byte    | true e false                                      |
| **byte**  | 1 byte    | 0 a 255                                           |
| **sbyte** | 1 byte    | -128 a 127                                       |
| **short** | 2 bytes   | -32768 a 32767                                   |
| **ushort**| 2 bytes   | 0 a 65535                                        |
| **int**   | 4 bytes   | -2147483648 a 2147483647                         |
| **uint**  | 4 bytes   | 0 a 4294967295                                   |
| **long**  | 8 bytes   | -9223372036854775808L a 9223372036854775807L     |
| **ulong** | 8 bytes   | 0 a 18446744073709551615                         |
| **float** | 4 bytes   | Números até 10 elevado a 38. Exemplo: 10.0f, 12.5f |
| **double**| 8 bytes   | Números até 10 elevado a 308. Exemplo: 10.0, 12.33 |
| **decimal**| 16 bytes | Números com até 28 casas decimais. Exemplo 10.991m, 33.333m |
| **char**  | 2 bytes   | Caracteres delimitados por aspas simples. Exemplo: 'a', 'ç', 'o' |


Os tipos listados nessa tabela são conhecidos como tipos primitivos ou value types da linguagem C#. Toda vez que atribuímos um valor para uma variável de um tipo primitivo, o C# copia o valor atribuído para dentro da variável.

Agora que conhecemos os tipos primitivos da linguagem C#, vamos ver como eles interagem dentro de uma aplicação. Suponha que temos um código que declara uma variável do tipo inteiro e depois tenta copiar seu conteúdo para uma variável long:

```csharp
int valor = 1;
long valorGrande = valor;
```

Nesse caso, como o tamanho de uma variável `long` é maior do que o de uma variável `int`, o C# sabe que podemos copiar o seu conteúdo sem perder informações, e, por isso, esse é um código que compila sem nenhum erro.

Agora vamos tentar copiar o `int` para uma variável do tipo `short`:

```csharp
int valor = 1;
short valorPequeno = valor;
```

Nesse código, tentamos copiar o conteúdo de uma variável maior para dentro de uma de tamanho menor. Essa cópia pode ser perigosa, pois o valor que está na variável do tipo `int` pode não caber na variável `short`, e, por isso, o compilador do C# gera um erro de compilação quando tentamos fazer essa conversão.

Para forçarmos o compilador do C# a fazer uma conversão perigosa, precisamos utilizar uma operação do C# chamada casting, especificando para qual tipo queremos fazer a conversão.

```csharp
int valor = 1;
short valorPequeno = (short)valor;
```

## Armazenando textos em variáveis

Além dos tipos primitivos, o C# também possui um tipo específico para armazenar textos. No tipo `string`, podemos guardar qualquer valor que seja delimitado por aspas duplas, por exemplo:

```csharp
string mensagem = "Minha Mensagem";
MessageBox.Show(mensagem);
```

Podemos juntar o valor de duas variáveis do tipo string utilizando o operador `+` da linguagem. A soma de strings é uma operação conhecida como concatenação.

```csharp
string mensagem = "Olá ";
string nome = "aluno";
MessageBox.Show(mensagem + nome);
```

Esse código imprime o texto "Olá victor" em uma caixa de mensagens. Podemos utilizar a concatenação para adicionar o conteúdo de qualquer variável em uma string:

```csharp
int idade = 25;
string mensagem = "sua idade é: " + idade;
MessageBox.Show(mensagem);
```

Esse segundo código imprime o texto **"sua idade é: 25"**.