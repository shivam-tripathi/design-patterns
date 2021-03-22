package chainOfResponsibility.impl01;

public class FileLogger extends AbstractLogger {
  public FileLogger(int level) {
    this.level = level;
  }
  @Override
  protected void write(String msg) {
    System.out.println("FileLogger::" + msg);
  }
}
