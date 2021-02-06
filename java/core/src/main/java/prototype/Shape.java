package prototype;

import lombok.Getter;
import lombok.Setter;

@Getter
public abstract class Shape implements Cloneable {
  @Setter
  private String id;

  protected String type;

  public abstract void draw();

  @Override
  protected Object clone() throws CloneNotSupportedException {
    return super.clone();
  }
}
