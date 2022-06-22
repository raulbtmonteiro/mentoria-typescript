// Como podemos melhorar o esse código usando TS?

interface IPessoa {
  nome: string;
  idade: number;
  profissao: "atriz" | "padeiro";
}

let pessoa1: IPessoa = {
  nome: "Maria",
  idade: 29,
  profissao: "atriz",
};

let pessoa2: IPessoa = {
  nome: "roberto",
  idade: 19,
  profissao: "padeiro",
};

let pessoa3: IPessoa = {
  nome: "laura",
  idade: 32,
  profissao: "atriz",
};

let pessoa4: IPessoa = {
  nome: "carlos",
  idade: 19,
  profissao: "padeiro",
};
