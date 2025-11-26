describe('Login E2E', () => {
  beforeEach(() => {
    cy.visit('/');
    // limpiar sessionStorage para no interferir entre tests
    cy.window().then((win) => win.sessionStorage.clear());
  });

  it('renderiza los campos de login', () => {
    cy.get('input[name="username"]').should('exist');
    cy.get('input[type="password"]').should('exist');
    cy.contains('Ingresar').should('exist');
  });

  it('muestra validación si se envía vacío', () => {
    cy.contains('Ingresar').click();
    cy.get('[role="alert"]').should('contain', 'Por favor, ingresa usuario y contraseña.');
  });

  it('toggle mostrar/ocultar contraseña', () => {
    const pass = 'passPrueba123';
    cy.get('input[name="username"]').type('usuarioTest');
    cy.get('input[type="password"]').type(pass).should('have.value', pass);

    // botón con aria-label 'display the password' / 'hide the password'
    cy.get('button[aria-label="display the password"]').click();

    // ahora el input que contiene el password debería ser de tipo text
    cy.get(`input[value="${pass}"]`).should('have.attr', 'type', 'text');
  });

  it('login exitoso almacena usuario en sessionStorage', () => {
    const user = 'usuarioPrueba';
    const pwd = 'contraPrueba';
    cy.get('input[name="username"]').type(user);
    cy.get('input[type="password"]').type(pwd);
    cy.contains('Ingresar').click();

    // verificar que sessionStorage contiene el usuario (persistido por zustand)
    cy.window().then((win) => {
      const stored = win.sessionStorage.getItem('pqrs-storage') || '';
      expect(stored).to.contain(user);
    });
  });
});
