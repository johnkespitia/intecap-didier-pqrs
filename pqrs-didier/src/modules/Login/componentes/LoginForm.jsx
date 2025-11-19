import { Button, 
    FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, 
    OutlinedInput, TextField, Alert } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginForm = ({
    handleFormSubmit,
    password,
    setPassword,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleMouseUpPassword,
    error
}) => {
  return <form className="my-4 space-y-6" onSubmit={handleFormSubmit}>
                <div>
                    <div className="mt-2">
                        <TextField className="w-full" name="username" helperText="Ingresa el usuario"
                                    id="demo-helper-text-misaligned" label="Usuario"/>
                    </div>
                </div>
                <div>
                    <div className="mt-2">
                        <FormControl className="w-full" variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                                <OutlinedInput
                                    //id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                                }
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                onMouseUp={handleMouseUpPassword}
                                                edge="end"
                                                >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                                <FormHelperText>
                                    Ingresa la contraseña
                                </FormHelperText>
                        </FormControl>
                    </div>
                </div>
                <div>
                    <Button className="w-full" type="submit" variant="contained">Ingresar</Button>
                </div>
                {error && <Alert variant="filled" severity="error">{error}</Alert>}
            </form>
}

export default LoginForm;