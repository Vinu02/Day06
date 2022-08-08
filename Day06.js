//Write a “person” class to hold all the details.

class person{
    
    constructor (name,id,college){
        this.name=name;
        this.id=id;
        this.college=college;               
    }   
}
var c1=new person("Vinu","1234","CSI");
console.log(c1);


//calculate uber price

class person1{
    constructor(name,uberid,kmnoted,perkmcharge,tcost){
      this.name=name;
      this.uberid=uberid;
      this.kmnoted=kmnoted;
      this.perkmcharge=perkmcharge;
      this.tcost=tcost;
    }
  }
    var s1=new person1("Vinu","1234",20,13,20*13);
  
  console.log(s1);