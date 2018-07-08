describe("pow", function(){
	it("підносить 2 до 3 степені", function(){
		assert.equal(pow(2, 3), 8);
	});
	it("підносить 3 до 2 степені", function(){
		assert.equal(pow(3, 2), 9);
	})
	it("якщо передані аргументи текстового типу", function(){
		assert.equal(pow("a", 3), Error);
	})
});