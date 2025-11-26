import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginHOC from './LoginHOC.jsx';
import LoginForm from './LoginForm.jsx';
import { useUserStore } from '@stores';

// Mock del store de zustand
vi.mock('@stores', () => ({
  useUserStore: vi.fn(),
}));

describe('LoginHOC Component', () => {
  let mockSetUser;

  beforeEach(() => {
    mockSetUser = vi.fn();
    useUserStore.mockReturnValue({
      setUser: mockSetUser,
      clearUser: vi.fn(),
    });
    vi.clearAllMocks();
  });

  it('renderiza el componente hijo (LoginForm)', () => {
    render(
      <LoginHOC>
        <LoginForm />
      </LoginHOC>
    );

    expect(screen.getByLabelText(/Usuario/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Ingresar/i })).toBeInTheDocument();
  });

  // it('inyecta props correctamente al componente hijo', () => {
  //   const TestComponent = ({ handleFormSubmit, password, showPassword, error }) => (
  //     <div>
  //       <div data-testid="password-value">{password}</div>
  //       <div data-testid="show-password">{showPassword.toString()}</div>
  //       <div data-testid="error-value">{error}</div>
  //       <button onClick={() => handleFormSubmit({ preventDefault: () => {}, target: new FormData() })}>
  //         Test Submit
  //       </button>
  //     </div>
  //   );

  //   render(
  //     <LoginHOC>
  //       <TestComponent />
  //     </LoginHOC>
  //   );

  //   expect(screen.getByTestId('password-value')).toHaveTextContent('');
  //   expect(screen.getByTestId('show-password')).toHaveTextContent('false');
  //   expect(screen.getByTestId('error-value')).toHaveTextContent('');
  // });

  // it('valida que usuario y contraseña sean requeridos', async () => {
  //   const user = userEvent.setup();

  //   render(
  //     <LoginHOC>
  //       <LoginForm />
  //     </LoginHOC>
  //   );

  //   const submitButton = screen.getByRole('button', { name: /ingresar/i });
  //   await user.click(submitButton);

  //   expect(screen.getByText(/por favor, ingresa usuario y contraseña/i)).toBeInTheDocument();
  //   expect(mockSetUser).not.toHaveBeenCalled();
  // });

  // it('valida que usuario sea requerido', async () => {
  //   const user = userEvent.setup();

  //   render(
  //     <LoginHOC>
  //       <LoginForm />
  //     </LoginHOC>
  //   );

  //   const passwordInput = screen.getByLabelText(/contraseña/i);
  //   await user.type(passwordInput, 'miPassword123');

  //   const submitButton = screen.getByRole('button', { name: /ingresar/i });
  //   await user.click(submitButton);

  //   expect(screen.getByText(/por favor, ingresa usuario y contraseña/i)).toBeInTheDocument();
  //   expect(mockSetUser).not.toHaveBeenCalled();
  // });

  // it('valida que contraseña sea requerida', async () => {
  //   const user = userEvent.setup();

  //   render(
  //     <LoginHOC>
  //       <LoginForm />
  //     </LoginHOC>
  //   );

  //   const usernameInput = screen.getByLabelText(/usuario/i);
  //   await user.type(usernameInput, 'miUsuario');

  //   const submitButton = screen.getByRole('button', { name: /ingresar/i });
  //   await user.click(submitButton);

  //   expect(screen.getByText(/por favor, ingresa usuario y contraseña/i)).toBeInTheDocument();
  //   expect(mockSetUser).not.toHaveBeenCalled();
  // });

  // it('limpia espacios en blanco de usuario y contraseña', async () => {
  //   const user = userEvent.setup();

  //   render(
  //     <LoginHOC>
  //       <LoginForm />
  //     </LoginHOC>
  //   );

  //   const usernameInput = screen.getByLabelText(/usuario/i);
  //   const passwordInput = screen.getByLabelText(/contraseña/i);

  //   await user.type(usernameInput, '  usuarioConEspacios  ');
  //   await user.type(passwordInput, '  passwordConEspacios  ');

  //   const submitButton = screen.getByRole('button', { name: /ingresar/i });
  //   await user.click(submitButton);

  //   expect(mockSetUser).toHaveBeenCalledWith({
  //     username: 'usuarioConEspacios',
  //     password: 'passwordConEspacios',
  //   });
  // });

  // it('guarda usuario en store cuando formulario es válido', async () => {
  //   const user = userEvent.setup();

  //   render(
  //     <LoginHOC>
  //       <LoginForm />
  //     </LoginHOC>
  //   );

  //   const usernameInput = screen.getByLabelText(/usuario/i);
  //   const passwordInput = screen.getByLabelText(/contraseña/i);

  //   await user.type(usernameInput, 'testuser');
  //   await user.type(passwordInput, 'testpass123');

  //   const submitButton = screen.getByRole('button', { name: /ingresar/i });
  //   await user.click(submitButton);

  //   expect(mockSetUser).toHaveBeenCalledWith({
  //     username: 'testuser',
  //     password: 'testpass123',
  //   });
  // });

  // it('limpia el error cuando el login es exitoso', async () => {
  //   const user = userEvent.setup();

  //   render(
  //     <LoginHOC>
  //       <LoginForm />
  //     </LoginHOC>
  //   );

  //   // Primer intento sin datos
  //   const submitButton = screen.getByRole('button', { name: /ingresar/i });
  //   await user.click(submitButton);

  //   expect(screen.getByText(/por favor, ingresa usuario y contraseña/i)).toBeInTheDocument();

  //   // Segundo intento con datos válidos
  //   const usernameInput = screen.getByLabelText(/usuario/i);
  //   const passwordInput = screen.getByLabelText(/contraseña/i);

  //   await user.type(usernameInput, 'usuario');
  //   await user.type(passwordInput, 'password');
  //   await user.click(submitButton);

  //   // El error no debería estar en el documento (fue limpiado)
  //   // Esperamos a que desaparezca
  //   expect(screen.queryByText(/por favor, ingresa usuario y contraseña/i)).not.toBeInTheDocument();
  // });

  // it('maneja el estado de mostrar/ocultar contraseña', async () => {
  //   const user = userEvent.setup();

  //   const TestComponent = ({ handleClickShowPassword, showPassword }) => (
  //     <div>
  //       <div data-testid="show-status">{showPassword.toString()}</div>
  //       <button onClick={handleClickShowPassword}>Toggle Password</button>
  //     </div>
  //   );

  //   const { rerender } = render(
  //     <LoginHOC>
  //       <TestComponent />
  //     </LoginHOC>
  //   );

  //   expect(screen.getByTestId('show-status')).toHaveTextContent('false');

  //   const toggleButton = screen.getByRole('button', { name: /toggle password/i });
  //   await user.click(toggleButton);

  //   // Debido a cómo funciona el HOC, necesitamos redibujar para ver el cambio
  //   rerender(
  //     <LoginHOC>
  //       <TestComponent />
  //     </LoginHOC>
  //   );

  //   // La próxima vez que se llame debería tener el estado actualizado
  //   expect(mockSetUser).not.toHaveBeenCalled();
  // });

  // it('actualiza el estado de contraseña cuando setPassword es llamado', async () => {
  //   const user = userEvent.setup();

  //   render(
  //     <LoginHOC>
  //       <LoginForm />
  //     </LoginHOC>
  //   );

  //   const passwordInput = screen.getByLabelText(/contraseña/i);
  //   await user.type(passwordInput, 'myPassword123');

  //   expect(passwordInput).toHaveValue('myPassword123');
  // });

  // it('previene comportamiento por defecto del formulario', async () => {
  //   const user = userEvent.setup();

  //   const mockPreventDefault = vi.fn();
  //   const mockFormData = new Map([
  //     ['username', 'testuser'],
  //     ['password', 'testpass'],
  //   ]);
  //   mockFormData.get = vi.fn((key) => {
  //     const data = { username: 'testuser', password: 'testpass' };
  //     return data[key];
  //   });

  //   render(
  //     <LoginHOC>
  //       <LoginForm />
  //     </LoginHOC>
  //   );

  //   const usernameInput = screen.getByLabelText(/usuario/i);
  //   const passwordInput = screen.getByLabelText(/contraseña/i);

  //   await user.type(usernameInput, 'testuser');
  //   await user.type(passwordInput, 'testpass');

  //   const form = screen.getByRole('button', { name: /ingresar/i }).closest('form');
  //   fireEvent.submit(form);

  //   expect(mockSetUser).toHaveBeenCalled();
  // });
});
