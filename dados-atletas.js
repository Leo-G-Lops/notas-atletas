class Atleta {
    constructor(nome, idade, peso, altura, notas) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
      this.notas = notas;
      this.categoria = this.calculaCategoria();
      this.imc = this.calculaIMC();
      this.mediaValida = this.calculaMediaValida();
    }
  
    calculaCategoria() {
      if (this.idade >= 9 && this.idade <= 11) {
        return "Infantil";
      } else if (this.idade >= 12 && this.idade <= 13) {
        return "Juvenil";
      } else if (this.idade >= 14 && this.idade <= 15) {
        return "Intermediário";
      } else if (this.idade >= 16 && this.idade <= 30) {
        return "Adulto";
      } else {
        return "Sem categoria";
      }
    }
  
    calculaIMC() {
      return this.peso / (this.altura * this.altura);
    }
  
    calculaMediaValida() {
      if (this.notas.length < 3) {
        
        return this.notas.reduce((a, b) => a + b, 0) / this.notas.length;
      } else {
        
        const notasOrdenadas = [...this.notas].sort((a, b) => a - b);
        const notasFiltradas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);
        return notasFiltradas.reduce((a, b) => a + b, 0) / notasFiltradas.length;
      }
    }
  
    obtemNomeAtleta() {
      return this.nome;
    }
  
    obtemIdadeAtleta() {
      return this.idade;
    }
  
    obtemPesoAtleta() {
      return this.peso;
    }
  
    obtemNotasAtleta() {
      return this.notas;
    }
  
    obtemCategoria() {
      return this.categoria;
    }
  
    obtemIMC() {
      return this.imc;
    }
  
    obtemMediaValida() {
      return this.mediaValida;
    }
  }
  
  const atleta1 = new Atleta("Leonardo", 29, 85, 1.75, [8, 9, 7, 6, 10]);
  
  console.log("Nome:", atleta1.obtemNomeAtleta());
  console.log("Idade:", atleta1.obtemIdadeAtleta());
  console.log("Peso:", atleta1.obtemPesoAtleta());
  console.log("Notas:", atleta1.obtemNotasAtleta());
  console.log("Categoria:", atleta1.obtemCategoria());
  console.log("IMC:", atleta1.obtemIMC());