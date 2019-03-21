describe("App.isKorean", () => {
  let iskorean;

  beforeEach(() => {
    iskorean = App.IsKorean();
  });
  it('접속한 IP의 나라 코드를 조회한다.', function(done) {
    iskorean.printCountry().then(function(result) {
      expect(result).toBe('KR');
      done()
    })
  })

});
