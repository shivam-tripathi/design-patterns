package adapter.implementation_02;

// Target interface
public interface CreditCard {
  public void setBankDetails(String customerName, long accountNumber, String bankName);
  public String getCreditCard();
}
