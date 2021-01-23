class tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.width=450;
		this.height=600;
		this.thickness=10;
		
		this.image=loadImage("images/tree.png")

		World.add(world, this.body)
	}
	display()
	{
			var posBottom=this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y);
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			pop()
			
	}

}