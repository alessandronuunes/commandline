// class estanciada sem o new
class Calculator {
    static sum(a,b) {
      return a+b
    }
  }
  
  console.log(Calculator.sum(10,20))
  class Person{
      constructor(firstName, lastName) {
          this._firstName = firstName
        this.lastName = lastName
      }
      get firstName(){
          return this._firstName
      }
      set firstName(value) {
          this._firstName = value
      }
    
      get fullName(){
        //return ` ${this.firstName} ${this.lastName}` 
        return Person.joinNames(this.firstName, this.lastName)
      }
        // função estatica
        static joinNames( firstname, lastname){
        return `${firstname} ${lastname}`
      }
  
  }
  const pessoa = new Person('alessandro','oliveira')
  //pessoa.name = 'joao silva'
  console.log(pessoa.fullName)
  console.log(Person.joinNames('camila', 'carmo'))
  
  class Humano extends Person{
    constructor (firstName,lastName, sexo){
      super(firstName, lastName)
      this.sexo = sexo
    }
  }
  
  const teste = new Humano ('Laura', 'Carmo', 'Mulher')
  teste.sexo