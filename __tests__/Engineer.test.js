
const Employee = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
      it("should create a object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        const e_github = '1234546';
        
        const obj = new Engineer(e_name, e_id, e_email, e_github);

        expect(obj.name).toEqual(e_name);
      });
  
      it("should create a object with a 'id' property set to the 'id' argument provided when called with the 'new' keyword", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        const e_github = '1234546';
        
        const obj = new Engineer(e_name, e_id, e_email, e_github);

        expect(obj.id).toEqual(e_id);
      });
  
      it("should create a object with a 'email' property set to the 'email' argument provided when called with the 'new' keyword", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        const e_github = '1234546';
        
        const obj = new Engineer(e_name, e_id, e_email, e_github);

        expect(obj.email).toEqual(e_email);
      });

      it("should create a object with a 'github' property set to the 'github' argument provided when called with the 'new' keyword", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        const e_github = '1234546';
        
        const obj = new Engineer(e_name, e_id, e_email, e_github);

        expect(obj.github).toEqual(e_github);
      });

    });

    describe("Get Functions", () => {
      it("getName() should return the Engineer name", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        
        const obj = new Engineer(e_name, e_id, e_email);

        expect(obj.getName()).toEqual(e_name);
      });
  
      it("getId()() should return the Engineer Id", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        const e_github = '1234546';
        
        const obj = new Engineer(e_name, e_id, e_email, e_github);

        expect(obj.getId).toEqual(e_id);
      });
  
      it("getEmail() should return the Engineer email", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        const e_github = '1234546';
        
        const obj = new Engineer(e_name, e_id, e_email, e_github);

        expect(obj.getEmail()).toEqual(e_email);
      });
        
      it("getGithub() should return the Engineer github", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        const e_github = '1234546';
        
        const obj = new Engineer(e_name, e_id, e_email, e_github);

        expect(obj.getGithub()).toEqual(e_github);
      });

      it("getRole() should return the 'Engineer'", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        const e_github = '1234546';
        
        const obj = new Engineer(e_name, e_id, e_email, e_github);

        expect(obj.getRole()).toEqual('Engineer');
      });

    });
  });