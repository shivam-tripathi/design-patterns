package chainOfResponsibility.impl01;

public class ChainPattern {

  public static AbstractLogger getLogger() {
    AbstractLogger errorLogger = new ErrorLogger(AbstractLogger.ERROR);
    AbstractLogger fileLogger = new FileLogger(AbstractLogger.DEBUG);
    AbstractLogger consoleLogger = new ConsoleLogger(AbstractLogger.INFO);

    errorLogger.setNextLogger(fileLogger);
    fileLogger.setNextLogger(consoleLogger);

    return errorLogger;
  }

  public static void main(String[] args) {
    AbstractLogger logger = getLogger();
    logger.logMessage(1, "Level-1");
    logger.logMessage(2, "Level-2");
    logger.logMessage(3, "Level-3");
  }
}
