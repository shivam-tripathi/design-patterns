package flyweight.impl01;

import lombok.Setter;
import lombok.ToString;

@ToString
@Setter
public class Circle implements Shape {
  private String color;
  private int x;
  private int y;
  private int radius;

  public Circle(String color) {
    this.color = color;
  }

  @Override
  public void draw() {
    System.out.println(this);
  }
}
