import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className='flex flex-wrap bg-[url(/images/topo-map.jpg)]'>
      <div className='flex flex-col justify-center content-center flex-wrap basis-1/2'>
        <div className='p-5 text-[#F68E2B] bg-[#315731] rounded'>
      <Link className= 'text-white' to='/signup'>← Go to Signup</Link>
        <h2 className='flex justify-center text-[#F68E2B] font-[anton]'>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className='flex-row space-between my-2'>
            <label className='font-[anton]' htmlFor='email'>Email address:</label>
            <input
              placeholder='youremail@test.com'
              name='email'
              type='email'
              id='email'
              onChange={handleChange}
            />
          </div>
          <div className='flex-row space-between my-2'>
            <label className='font-[anton]' htmlFor='pwd'>Password:</label>
            <input
              placeholder='******'
              name='password'
              type='password'
              id='pwd'
              onChange={handleChange}
            />
          </div>

          {error ? (
            <div>
              <p className='error-text'>
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}
          <div className='flex-row flex-end'>
            <button className='font-[anton]' type='submit'>Submit</button>
          </div>
        </form>
        </div>
      </div>
      <div className='basis-1/2'>
        <img src='/images/aw-3hero3.webp' alt='Orange Star Heroes' />
      </div>
    </div>
  );
};

export default Login;
