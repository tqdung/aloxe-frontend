import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { PostLoginPayload } from '@aloxe-frontend/aloxe-api';
import { useAuthentication } from '@aloxe-frontend/data-application-store';

export function Login() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<PostLoginPayload>({ mode: 'all' });
  const { login, isLoading } = useAuthentication();

  const onSubmit = (values: PostLoginPayload) => login({
    ...values,
    phoneNumber: `84${values.phoneNumber}`
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl marginBottom="8px" isInvalid={!!errors.phoneNumber}>
        <FormLabel aria-required htmlFor="phoneNumber" marginBottom="4px">
          Số điện thoại
        </FormLabel>
        <InputGroup>
          <InputLeftElement>+84</InputLeftElement>
          <Input
            id="phoneNumber"
            {...register('phoneNumber', {
              required: { value: true, message: 'Chưa nhập số điện thoại' },
            })}
          />
        </InputGroup>
        <FormErrorMessage>{errors?.phoneNumber?.message}</FormErrorMessage>
      </FormControl>
      <FormControl marginBottom="16px" isInvalid={!!errors.password}>
        <FormLabel aria-required htmlFor="password" marginBottom="4px">
          Password
        </FormLabel>
        <Input
          id="password"
          type="password"
          {...register('password', {
            required: { value: true, message: 'Chưa nhập mật khẩu' },
          })}
        />
        <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
      </FormControl>
      <Button
        type="submit"
        w="full"
        isDisabled={!isValid || isLoading}
        colorScheme="whatsapp"
      >
        Đăng nhập
      </Button>
    </form>
  );
}

export default Login;
