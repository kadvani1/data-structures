describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  // add more tests here to test the functionality of linkedList
  it('parent property, which refers to the parent node or null when there is no node', function(){
    // .parent property
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
  });

  it('should disassociate the tree with its parent (in both directions)', function(){
    // removeFromParent()
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
  });

  it('should accept a callback and execute it on every value contained in the tree.', function(){
    // traverse()
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
  });


});
