describe("Utilities test (with setup and tear-down)", function() {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
  });

  it('should add to total tip amount and calculate all payments on sumPaymentTotal()', function () {
    expect(sumPaymentTotal('tipAmt')).toEqual(20);

    billAmtInput.value = 200;
    tipAmtInput.value = 40;
    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(60);
  });

  it('should add to total bill amount and calculate all payments on sumPaymentTotal()', function () {
    expect(sumPaymentTotal('billAmt')).toEqual(100);

    billAmtInput.value = 200;
    tipAmtInput.value = 40;
    submitPaymentInfo();

    expect(sumPaymentTotal('billAmt')).toEqual(300);
  });

  it('should calculate total tip percent on sumPaymentTotal()', function () {
    expect(sumPaymentTotal('tipPercent')).toEqual(20);

    billAmtInput.value = 100;
    tipAmtInput.value = 20;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipPercent')).toEqual(40);
  });

  it('should calculate tip percent of a single tip on calculateTipPercent()', function () {
    expect(calculateTipPercent(100, 23)).toEqual(23);
    expect(calculateTipPercent(111, 11)).toEqual(10);
  });

  it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
    let newTr = document.createElement('tr');

    appendTd(newTr, 'test');

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('test');
  });

  it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
    let newTr = document.createElement('tr');

    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('X');
  });

  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
  });
});

