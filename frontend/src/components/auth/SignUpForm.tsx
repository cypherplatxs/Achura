import { User, UserType } from '@/types'
import {
  Divider,
  Input,
  Select,
  SelectItem,
  Textarea,
  Button
} from '@nextui-org/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver, } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type SignUpFormProps = {
  handleOnSubmit: any
  isLoading: boolean
}

interface UserYup extends yup.InferType<typeof schema> {}

const schema = yup.object({
  type: yup.string().oneOf(['sponsor', 'organization']),
  representativeName: yup.string().required(),
  representativeIdentificationNumber: yup
    .number()
    .positive()
    .integer()
    .required(),
  representativeEmail: yup.string().required(),
  legalEntityName: yup.string().required(),
  legalDescription: yup.string().required(),
  legalEntityEmail: yup.string().email().required(),
  legalEntityAddress: yup.string().max(40).required(),
  legalEntityTaxRegistrationNumber: yup
    .number()
    .positive()
    .integer()
    .required(),
  legalEntityCountry: yup.string().required(),
  accountDescription: yup.string().nullable()
})

export function SignUpForm ({ handleOnSubmit, isLoading }: SignUpFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })


  const _handleOnSubmit = async (userData: UserYup) => {
    handleOnSubmit(userData)
  }

  return (
    <form
      onSubmit={handleSubmit(_handleOnSubmit)}
      className='px-5 lg:px-0 lg:w-1/2 flex flex-col gap-5'
    >
      <div className='grid lg:grid-cols-2 gap-5'>
        <Select
          {...register('type', { required: true })}
          isInvalid={errors.type && true}
          errorMessage={errors.type && 'Please select a Role'}
          name='type'
          label='Select your role'
        >
          <SelectItem key='sponsor' value='sponsor'>
            Sponsor
          </SelectItem>
          <SelectItem key='organization' value='organization'>
            Organization
          </SelectItem>
        </Select>
        <Input
          {...register('representativeName', { required: true })}
          inputMode='text'
          label='Representative name'
          placeholder='John Doe'
          name='representativeName'
          isInvalid={errors.representativeName && true}
          errorMessage={
            errors.representativeName && 'Please enter a valid name'
          }
        />
        <Input
          {...register('representativeIdentificationNumber', {
            required: true
          })}
          isInvalid={errors.representativeIdentificationNumber && true}
          errorMessage={
            errors.representativeIdentificationNumber &&
            'Please enter a valid ID'
          }
          inputMode='numeric'
          label='ID number'
          type='number'
          placeholder='922991...'
          name='representativeIdentificationNumber'
        />
        <Input
          {...register('representativeEmail', { required: true })}
          isInvalid={errors.representativeEmail && true}
          errorMessage={
            errors.representativeEmail && 'Please enter a valid email'
          }
          inputMode='email'
          label='Email'
          placeholder='john.doe@example.com'
          name='representativeEmail'
        />
        <h3 className='col-span-2 w-full text-center text-2xl '>
          Legal Entity info
        </h3>
        <Divider className='col-span-2' />
        <Input
          {...register('legalEntityName', { required: true })}
          isInvalid={errors.legalEntityName && true}
          errorMessage={
            errors.legalEntityName && 'Please enter a valid legal entity name'
          }
          inputMode='text'
          label='Legal entity name'
          placeholder='XYZ Company'
          name='legalEntityName'
        />
        <Input
          {...register('legalDescription', { required: true })}
          isInvalid={errors.legalDescription && true}
          errorMessage={
            errors.legalDescription && 'Please enter a valid legal description'
          }
          inputMode='text'
          label='Legal description'
          type='text'
          placeholder='Some description'
          name='legalDescription'
        />
        <Input
          {...register('legalEntityEmail', {
            required: true
          })}
          isInvalid={errors.legalEntityEmail && true}
          errorMessage={errors.legalEntityEmail && 'Please enter a valid email'}
          inputMode='email'
          label='Legal Entity Email'
          placeholder='info@xyzcompany.com'
          name='legalEntityEmail'
        />
        <Input
          {...register('legalEntityAddress', { required: true })}
          isInvalid={errors.legalEntityAddress && true}
          errorMessage={
            errors.legalEntityAddress && 'Please enter a valid address'
          }
          inputMode='text'
          label='Legal Entity address'
          placeholder='1234 Elm St, City, Country'
          name='legalEntityAddress'
        />
        <Input
          {...register('legalEntityTaxRegistrationNumber', {
            required: true
          })}
          isInvalid={errors.legalEntityTaxRegistrationNumber && true}
          errorMessage={
            errors.legalEntityTaxRegistrationNumber &&
            'Please enter a valid Tax registration number'
          }
          inputMode='numeric'
          type='number'
          label='Legal Entity tax registration number'
          placeholder='89809289'
          name='legalEntityTaxRegistrationNumber'
        />
        {/* TODO make this a select with an external Api */}
        <Input
          {...register('legalEntityCountry', { required: true })}
          isInvalid={errors.legalEntityCountry && true}
          errorMessage={
            errors.legalEntityCountry && 'Please enter a valid country'
          }
          inputMode='text'
          label='Legal Entity country'
          placeholder='CountryABC'
          name='legalEntityCountry'
        />
      </div>
      <Divider />
      <Button isLoading={isLoading} type='submit' color='primary'>
        Submit
      </Button>
    </form>
  )
}
