package chainOfResponsibility.impl01;

import lombok.Setter;

@Setter
abstract public class AbstractLogger {
  public static int INFO = 1;
  public static int DEBUG = 2;
  public static int ERROR = 3;

  protected int level;
  protected AbstractLogger nextLogger;

  public void logMessage(int level, String msg) {
    if (this.level <= level) {
      write(msg);
      return;
    }
    if (nextLogger != null) {
      nextLogger.logMessage(level, msg);
    }
  }

  abstract protected void write(String msg);
}
