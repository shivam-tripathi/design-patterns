package prototype.shapes;

import prototype.Shape;

public class Rectangle extends Shape {
  public Rectangle() {
    type = "rectangle";
  }

  @Override
  public void draw() {
    System.out.println("Draw::" + this.type);
  }
}
