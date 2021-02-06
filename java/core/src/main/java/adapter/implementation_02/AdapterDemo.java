package adapter.implementation_02;

public class AdapterDemo {
  public static void main(String[] args) {
    CreditCard creditCard = new BankDetailsAdapterForCreditCard();
    creditCard.setBankDetails("Tom Hardy", 12345, "Hardy Bank");
    System.out.println(creditCard.getCreditCard());
  }
}
