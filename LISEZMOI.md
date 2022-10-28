[ES](./LEERME.md)
[EN](./README.md)

# Éditeur de données structurées: Un kata disruptif

## Données structurées... de quoi parle-t-on?

Les données structurées sont au coeur de notre interaction avec les machines. Si nous, humain, avons la capacité de trouver du sens d'un ensemble de données pêle-mêle, disparate et désordonnée, il n'en va pas de même des ordinateurs. Du moins, pas encore.

La structuration des données permet de la rendre *lisible* mécaniquement à partir d'un algorithme classique. Déjà dans la machine de Turing est défini par une donnée (un rouleau de cellules finis) structurées (chaque cellule décrivant un des états possibles construit lui-même d'un alphabet, ensemble fini de symbole). Depuis les cartes perforés des premiers ordinateurs, tout language est conçu pour être, d'une manière ou d'une autre, *lu par une machine*.

De manière intéressante, nous avons vu au cours des dernières années émergés plusieurs langages de programmation "déclaratif". CSS, XML. JSON, YAML, etc. Ce nouveau paradigme de programmation, combiné à une sémantique spécialisée au problème (DSL), montre encore plus clairement la proximité entre le code et la donnée. Et on ne peut plus nier la puissance de cette approche compte tenu de succès de son importance dans le Coud (IaC, Kubernetes et autres fichiers de configuration).

Ne nous limitons pas là. Nous pouvons étendre la données structurées à l'édition de texte et à des formats/languages comme latex, RTF, ReStructuredText, markdown, et ,bien sûr le html. On voit que certains formats sont mieux adaptés à la lectures par des humains (mais certainement moins puissant), mais tous permettent aux données d'être manipulés et, dans le domaine des écrits textuels particulièrement, visualisées.

En fait, pratiquement n'importe quelle information peut être vue ou écrite sous-forme de donnée structurée. Que ce soit une date, un formulaire avec validation ou une image au format JPEG, en passant par les vidéos et leurs multipes codecs.  

De ce point de vue, l'édition de données structurées apparait presque comme un pléonasme puisque même l'information la plus complexe est généralement stockée sur un ordinateur sous une forme structurée.

## Pourquoi ce kata est-il intéressant?

Ce kata aborde plusieurs aspects élémentaires de toute application:

  - entrée de donnée,
  - validation
  - stockage

Pourtant, en variant cette application prototype facile, on peut aborder plusieurs sujets intéressants. On pourrait travailler les méthodes de stockages, les architectures de types MVC, rafiner l'interface utilisateur (UI) ou les mécanismes d'interaction (UX).

Cependant, nous voulons que ce kata mette l'accent sur les *données structurées*. Dans un premier temps, il être simple de commencer en variant les formats de données. Pourtant, la richesse de ce kata se révèlera certainement lorsqu'on inroduira des notions plus complexes de sémantique, voire d'ontologie.

En fait, ce kata est simplement un interface hummain-machine qui vise à explorer les méthodes et les limites de la communication entre ces 2 univers.

À partir de ce kata, on peut produire un validateur de document yaml ou un éditeur pour la programmation reconnaissant plusieur langages. Mais il y a certainement 1001 sortes d'éditeurs de données structurés imaginables!

## Application type

  - L'utilisateur *fournit* un document contenant des données structurées.
  - Le système *intègre* ce document.
  - Le système *avise* l'utilisateur lorsqu'il ne *comprend* pas le document de l'utilisateur.
  - L'utilisateur peut mettre fin à son interaction avec le système,
    - et lorsque l'utilisateur recontacte le système, celui-ci dispose encore du document.

# Qu'est-ce qu'un **kata disruptif**?
 
 Un **kata disruptif** est un code kata qui prend sa source d'une idée réelle.

Il n'est pas nécessaire que cette idée soit fantastique, originale ou révolutionnaire. Mais il est essentielle qu'elle soit vrai, honnête et qu'elle nous intéresse sincèrement.

À partir ce cette idée, seront écrit des requis (définition de la problématique), puis des spécifications (précision d'une solution). Une implémentation suivra sous la forme plus standard d'un code kata.

Nous encourageons l'utilisation des méthodes reconnues dans l'industie du logiciel en matière de requis et de spécification. De même que l'usage de schémas d'architecture. Pour ce qui est de l'implémentation, nous recommendons l'usage de la méthodologie TDD *red-green-refactor*.

 Cependant, nous croyons que pour que pour être disruptif, la méthode, les outils et les choix technologiques ne sont pas important.
 L'essence du **kata disruptif** repose sur les trois aspects fondamentaux:
  - l'inspiration du kata provient d'une problématique réelle,
  - la solution est le fruit d'un processus créatif auquel prend part le développeur, et
  - une attention particulière est apportée à la communication des idées tout au long du processus:
    - problématique,
    - problème,
    - solution et
    - implémentation.
    
