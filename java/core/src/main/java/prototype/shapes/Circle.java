package prototype.shapes;

import prototype.Shape;

public class Circle extends Shape {
  public Circle() {
    type = "circle";
  }

  @Override
  public void draw() {
    System.out.println("Draw::circle");
  }
}
