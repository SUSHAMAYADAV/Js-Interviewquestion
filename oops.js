class Student{
    constructor(name ,age,grade){
      this.name=name
      this.age=age
      this.grade=grade
    }
    welcome(){
      console.log('abc-->')
    }
  }
  class Child extends Student{
    constructor(name,age,grade,weight,color){
      super(name,age,grade)
      this.weight=weight
      this.color=color
        
    }
    test(){
      super.welcome()
    }
  }
  //let obj1=new Student('sus',20,'A')
 /* let obj2= new Child('pooja',18,'F',40,'white')
  obj2.test()
  console.log(obj2)

  //example of polymorphism
  class Student{
    sound(){
      console.log('student-->')
    }
  }
  
  class Teacher{
    sound(){
      console.log('teacher-->')
    }
  }
  
  class Popular{
    sound(){
      console.log('popular-->')
    }
  }
  let obj1=new Student()
  let obj2=new Teacher()
  let obj3= new Popular()
  obj1.sound()
  obj2.sound()
  obj3.sound()*/