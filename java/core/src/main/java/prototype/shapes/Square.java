package prototype.shapes;

import prototype.Shape;

public class Square extends Shape {
  public Square() {
    type = "square";
  }

  @Override
  public void draw() {
    System.out.println("Draw::" + this.type);
  }
}
