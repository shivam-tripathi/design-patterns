package flyweight.impl01;

import java.util.ArrayList;

public class FlyWeightPattern {
  private static final String[] colors = {"Red", "Green", "Blue", "White", "Black"};

  static String getRandomColor() {
    return colors[(int)(Math.random() * colors.length)];
  }

  public static void main(String[] args) {
    var circles = new ArrayList<Circle>();
    for (int i = 0; i < 10; i++) {
      Circle circle = (Circle) ShapeFactory.getCircle(getRandomColor());
      circle.setX((int)(Math.random()*100));
      circle.setY((int)(Math.random()*100));
      circles.add(circle);
    }
    circles.forEach(Circle::draw);
  }
}
