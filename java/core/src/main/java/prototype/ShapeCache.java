package prototype;

import prototype.shapes.Circle;
import prototype.shapes.Rectangle;
import prototype.shapes.Square;

import java.util.*;

public class ShapeCache {
  public static Hashtable<String, Shape> shapeCacheHash = new Hashtable<>();
  public static Map<String, String> shapeIdByType = new HashMap<>();

  public static Shape getShape(String shapeId) throws CloneNotSupportedException {
    var shape = shapeCacheHash.get(shapeId);
    return (Shape) shape.clone();
  }

  public static String getIdFromType(String type) {
    return shapeIdByType.get(type);
  }

  public static void loadCache() {
    var shapeDetails = Arrays.asList(
            new Object[] {UUID.randomUUID().toString(), new Circle()},
            new Object[] {UUID.randomUUID().toString(), new Rectangle()},
            new Object[] {UUID.randomUUID().toString(), new Square()}
    );
    for (var shapeDetail : shapeDetails) {
      var shape = (Shape) shapeDetail[1];
      var id = (String) shapeDetail[0];
      shape.setId(String.valueOf(id));
      shapeIdByType.put(shape.getType(), shape.getId());
      shapeCacheHash.put(shape.getId(), shape);
    }
  }
}
