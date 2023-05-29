
it('should calculate the monthly payment correctly', function () {
  const values = {
    amount: 10000,
    years: 10,
    rate: 3.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('98.89')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00')
});

it("should handle high interest rates", function() {
  const values = {
    amount: 12500,
    years: 10,
    rate: 90
  };
  expect(calculateMonthlyPayment(values)).toEqual('937.66')
});