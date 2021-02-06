package adapter.implementation_02;

// Adapter class
class BankDetailsAdapterForCreditCard implements CreditCard {
  BankDetails bankDetails;
  public BankDetailsAdapterForCreditCard() {
    bankDetails = new BankDetails();
  }

  @Override
  public void setBankDetails(String customerName, long accountNumber, String bankName) {
    bankDetails.setAccHolderName(customerName);
    bankDetails.setAccNumber(accountNumber);
    bankDetails.setBankName(bankName);
  }

  @Override
  public String getCreditCard() {
    long accNumber = bankDetails.getAccNumber();
    String accHolderName = bankDetails.getAccHolderName();
    String bankName = bankDetails.getBankName();
    return String.format("%s %s %s", accNumber, accHolderName, bankName);
  }
}
