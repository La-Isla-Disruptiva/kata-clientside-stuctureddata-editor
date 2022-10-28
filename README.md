[FR](./LISEZMOI.md)
[ES](./LEERME.md)

# Client Side Structured Data Editor: a Disruptive Kata

## What do we mean by *structured data*?

Structured data are at the heart of our relation with digital devices. As human, we can make sense of disordered or seemingly random data. But it's not the case for computers. At least, not yet.

Structuration of data allows it to be *read* mechaniclly using a classical algorithm. Already a Turing machine act on structured data:  a strip of finite cells (data) made of state from a set constructed from an alphabet (structured). Since the punched cards of the firsts computing machines, every pogramming language is designed to be read in a way or another by computers.

Interestingly, many programming languages developed in recent years are more declarative. CSS, XML, JSON, YAML. There is even debates as to whether they are programmation languages. Anyway, these data format combined with a domain specific language (DSL), show how close are structured data from code. Today, in view of the success of Infrastructure as Code (IaC) with kubernetes and plenty of other configuration based languages, the power of this approach can no longer be denied.

Let's not limit ourself about the definition of structured data. This can be extended to various format in text edition: tex/latex, RTF, reStructuredText, markdown and, of course, html. We see that it's easier for a human to use some of those data formats, while being limited in functionality. But, thestructure nature of this data allows computer to manipulate and visualize it in fancy ways.

We adopt the view point that any information can be viewed or expressed as structured data. Sure, all data format or languages have their specificities and limitations. But for the purpose of this **disruptive kata** every of these are structured data: a date, a web form with validation, an image or any video stream using any codec. 

Using this view point, editing structured data is almost a pleonasm for programmers. Because any information stored on a computer is writtent as structured data.

## What is interesting about that kata?

Realizing this kata, it's possible to practice many basic aspects of application development:

  - data entry,
  - data validation,
  - data storage

Also, by varying this simple application prototype, we can approach many interesting topics as basic architectures like MVC variants, UI or UX.

However, this kata emphasis the *structured data* aspect of the human-machine communicaiton. We can begin with easy variations of data formats. But, it's more interesting to introduce more complex concepts as semantic or, even, ontology to explore methods and limits of the communicaiton between our 2 worlds.

This kata can produce a yaml validator application or a more complex code editor. But there is definitly 1001 and more ways to implement a structured data editor.

## Prototypical application

Here are the abstract requirements that you must specify before the implementation.

  - The user *provides* information as structured data.
  - The system *acquires* this information.
  - The système *notifies* the user went it does not *understand* the user's provided information.
  - The user can *interrupt* its interaction with the system,
    - and when the user reconnects to the system, it still has the user provided information.

# What is Disruptive Kata?

**Disruptive Kata** is a code kata driven by real ideas.
No matter that this idea is great, new or revolutionary. It simply have to be a true and honest idea.

From there, requirements (precision of the problematic) and specification (precise description of the solution) are written. Implementation in a more *traditional* code kata form follows.

We advocate for the use of industry standards as formats for requirements and specifications.
We also recommend the use of software architecture diagrams.
For the implementation, we strongly encourage the *red-green-refactor* TDD methodology.

But to be disruptive, tools and technology is not relevant. 
Here are 3 basic criterias for a *Disruptive Kata*:
  - kata inspiration comes from a real problematic,
  - solution is a creative processe in which developers are involved and
  - a special attention is given to the communication of ideas:
    - problematic,
    - problem,
    - solution and
    - implementation.

  We think the harder in a disruptive kata is the expression of the idea that ignate ha kata.
