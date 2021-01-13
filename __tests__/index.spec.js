(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.match should match default index 1', function () {
      var str = '/api/v1/{id}/{uuid}/{a.b}';
      expect(nx.match(str, /{(.*?)}/g, 0)).toEqual(['{id}', '{uuid}', '{a.b}']);
      expect(nx.match(str, /{(.*?)}/g, 1)).toEqual(['id', 'uuid', 'a.b']);
    });
  });
})();
