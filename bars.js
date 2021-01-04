 class Boxi{

    constructor(x,y,width,height){

        var options ={

            isStatic:false

        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.w = width;
        this.h = height;
        World.add(world,this.body);

    }

 }


