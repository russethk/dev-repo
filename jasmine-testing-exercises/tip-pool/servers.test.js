describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server on submitServerInfo() with empty input', function () {
    serverNameInput.value = '';
    submitServerInfo();
  
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it("should add another server to the server table on updateServerTable()", () => {
    serverId += 1;
    allServers["server" + serverId.toString()] = {
      serverName: serverNameInput.value,
    };
    updateServerTable();
    const row = document.getElementById("server" + serverId.toString());
    expect(row.children[0].innerText).toEqual("Alice");
  });

  afterEach(function () {
       // teardown logic
       serverTbody.innerHTML = '';
       allServers = {};
       serverId = 0;
  });
});



