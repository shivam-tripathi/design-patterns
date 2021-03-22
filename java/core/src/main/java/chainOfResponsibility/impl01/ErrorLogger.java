package chainOfResponsibility.impl01;

public class ErrorLogger extends AbstractLogger {
  public ErrorLogger(int level) {
    this.level = level;
  }

  @Override
  protected void write(String msg) {
    System.out.println("ErrorLogger::" + msg);
  }
}
