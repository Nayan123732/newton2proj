class rope{
	constructor(body1,body2)
	{
		var options={
			bodyA:body1,
			bodyB:body2,
			length:100,
			stiffness:1,
			//pointB:{x:this.offsetX, y:this.offsetY}
		}
		//console.log(options);
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		line(pointA.x,pointA.y,pointB.x,pointB.y);
	}

}