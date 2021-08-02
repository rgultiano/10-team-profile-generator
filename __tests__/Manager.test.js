
const Employee = require('../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
      it("should create a object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        const e_officeNumber = '1234546';
        
        const obj = new Manager(e_name, e_id, e_email, e_officeNumber);

        expect(obj.name).toEqual(e_name);
      });
  
      it("should create a object with a 'id' property set to the 'id' argument provided when called with the 'new' keyword", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        const e_officeNumber = '1234546';
        
        const obj = new Manager(e_name, e_id, e_email, e_officeNumber);

        expect(obj.id).toEqual(e_id);
      });
  
      it("should create a object with a 'email' property set to the 'email' argument provided when called with the 'new' keyword", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        const e_officeNumber = '1234546';
        
        const obj = new Manager(e_name, e_id, e_email, e_officeNumber);

        expect(obj.email).toEqual(e_email);
      });

      it("should create a object with a 'officeNumber' property set to the 'officeNumber' argument provided when called with the 'new' keyword", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        const e_officeNumber = '1234546';
        
        const obj = new Manager(e_name, e_id, e_email, e_officeNumber);

        expect(obj.officeNumber).toEqual(e_officeNumber);
      });

    });

    describe("Get Functions", () => {
      it("getName() should return the manager name", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        
        const obj = new Manager(e_name, e_id, e_email);

        expect(obj.getName()).toEqual(e_name);
      });
  
      it("getId()() should return the manager Id", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        
        const obj = new Manager(e_name, e_id, e_email);

        expect(obj.getId).toEqual(e_id);
      });
  
      it("getEmail() should return the manager email", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        
        const obj = new Manager(e_name, e_id, e_email);

        expect(obj.getEmail()).toEqual(e_email);
      });

      it("getRole() should return the 'Manager'", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        
        const obj = new Manager(e_name, e_id, e_email);

        expect(obj.getRole()).toEqual('Manager');
      });

    });
  });