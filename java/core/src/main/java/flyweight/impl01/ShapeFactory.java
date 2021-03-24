package flyweight.impl01;

import java.util.HashMap;

public class ShapeFactory {
  private static final HashMap<String, Shape> circleMap = new HashMap<>();

  public static Shape getCircle(String color) {
    if (!circleMap.containsKey(color)) {
      var circle = new Circle(color);
      circleMap.put(color, circle);
    }
    return circleMap.get(color);
  }
}
