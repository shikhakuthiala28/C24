class Ground{
    constructor(x,y,width,height){

        var options={
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.w=width;
        this.h=height;

        World.add(world,this.body);
    }

    display(){

        var pos=this.body.position;
        var angle= this.body.angle;
        push ();
        rotate (angle);
        translate (pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop ();
    }
}