---
sidebar_position: 2
---

# Tomada de decisao

```mermaid
flowchart TD
    INICIO([INICIO]) --> A
    A[Deploy to production] --> B{Is it Friday?};
    B -- Yes --> C[Do not deploy!];
    B -- No --> D[Run deploy.sh to deploy!];
    C ----> E[Enjoy your weekend!];
    D ----> E[Enjoy your weekend!];

```

```mermaid
flowchart TD
    id1{{Início do Loop}}
    id2{{Condição}}
    id3{{Ação no Loop}}
    id4{{Fim do Loop}}

    id1 --> id2
    id2 -- Verdadeiro --> id3
    id3 --> id4
    id2 -- Falso --> id4
    id4 --> id1
```

**Fundamental Theorem of Calculus**  
Let $f:[a,b] \to \R$ be Riemann integrable. Let $F:[a,b]\to\R$ be $F(x)=
\int_{a}^{x}f(t)dt$.
Then $$F$$ is continuous, and at all $x$ such that $f$ is continuous at $x$,
$F$ is differentiable at $x$ with $F'(x)=f(x)$.