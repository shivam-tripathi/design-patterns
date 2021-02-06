package prototype;

import prototype.shapes.Circle;

public class PrototypeDemo {
  public static void main(String[] args) throws CloneNotSupportedException {
    ShapeCache.loadCache();

    ShapeCache.getShape(ShapeCache.getIdFromType("circle")).draw();
    ShapeCache.getShape(ShapeCache.getIdFromType("rectangle")).draw();
    ShapeCache.getShape(ShapeCache.getIdFromType("square")).draw();
  }
}
