
const Employee = require('../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
      it("should create a object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        const e_school = 'test school';
        
        const obj = new Intern(e_name, e_id, e_email, e_school);

        expect(obj.name).toEqual(e_name);
      });
  
      it("should create a object with a 'id' property set to the 'id' argument provided when called with the 'new' keyword", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        const e_school = 'test school';
        
        const obj = new Intern(e_name, e_id, e_email, e_school);

        expect(obj.id).toEqual(e_id);
      });
  
      it("should create a object with a 'email' property set to the 'email' argument provided when called with the 'new' keyword", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        const e_school = 'test school';
        
        const obj = new Intern(e_name, e_id, e_email, e_school);

        expect(obj.email).toEqual(e_email);
      });

      it("should create a object with a 'school' property set to the 'school' argument provided when called with the 'new' keyword", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        const e_school = 'test school';
        
        const obj = new Intern(e_name, e_id, e_email, e_school);

        expect(obj.officeNumber).toEqual(e_school);
      });

    });

    describe("Get Functions", () => {
      it("getName() should return the Intern name", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        const e_school = 'test school';
        
        const obj = new Intern(e_name, e_id, e_email, e_school);

        expect(obj.getName()).toEqual(e_name);
      });
  
      it("getId()() should return the Intern Id", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        const e_school = 'test school';
        
        const obj = new Intern(e_name, e_id, e_email, e_school);

        expect(obj.getId).toEqual(e_id);
      });
  
      it("getEmail() should return the Intern email", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        const e_school = 'test school';
        
        const obj = new Intern(e_name, e_id, e_email, e_school);

        expect(obj.getEmail()).toEqual(e_email);
      });
  
      it("getSchool() should return the Intern school", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        const e_school = 'test school';
        
        const obj = new Intern(e_name, e_id, e_email, e_school);

        expect(obj.getSchool()).toEqual(e_school);
      });


      it("getRole() should return the 'Intern'", () => {
        const e_name = 'test name';
        const e_id = 'test1234abc';
        const e_email = 'test@email.com';
        const e_school = 'test school';
        
        const obj = new Intern(e_name, e_id, e_email, e_school);

        expect(obj.getRole()).toEqual('Intern');
      });

    });
  });