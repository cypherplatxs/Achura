import { User, UserType } from '@/types';
import {
    Divider,
    Input,
    Select,
    SelectItem,
    Textarea,
    Button,
} from '@nextui-org/react';

type SignUpFormProps = {
    handleOnSubmit: any
}

export function SignUpForm({ handleOnSubmit }: SignUpFormProps) {

    const _handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // todo construct the userData object from the form data and catch nulls
        // user react form hooks to get the form data
        const userData: User = {
            publicKey: "",
            accountId: "",
            representativeName: "John Doe",
            representativeIdentificationNumber: 123456,
            representativeEmail: "john.doe@example.com",
            legalEntityName: "XYZ Company",
            legalDescription: 789012345,
            legalEntityEmail: "info@xyzcompany.com",
            legalEntityAddress: "1234 Elm St, City, Country",
            legalEntityTaxRegistrationNumber: 987654321,
            legalEntityCountry: "CountryABC",
            type: UserType.sponsor,
        };

        handleOnSubmit(userData);

    }

    return (
        <form
            onSubmit={_handleOnSubmit}
            className='px-5 lg:px-0 lg:w-1/2 flex flex-col gap-5'
        >
            <div className='grid lg:grid-cols-2 gap-5'>
                <Select
                    // isRequired
                    name='type'
                    label='Select your role'
                >
                    <SelectItem key='sponsor' value='sponsor'>
                        Founder
                    </SelectItem>
                    <SelectItem key='organization' value='organization'>
                        Organization
                    </SelectItem>
                </Select>
                <Input
                    // isRequired
                    inputMode='text'
                    label='Representative name'
                    placeholder='John Doe'
                    name='representativeName'
                />
                <Input
                    // isRequired
                    inputMode='numeric'
                    label='ID number'
                    type='number'
                    placeholder='922991...'
                    name='representativeIdentificationNumber'
                />
                <Input
                    // isRequired
                    inputMode='email'
                    label='Email'
                    placeholder='john.doe@example.com'
                    name='representativeEmail'
                />
                <h3 className='col-span-2 w-full text-center text-2xl ' >Legal Entity info</h3>
                <Divider className='col-span-2' />
                <Input
                    // isRequired
                    inputMode='text'
                    label='Legal entity name'
                    placeholder='XYZ Company'
                    name='legalEntityName'
                />
                <Input
                    // isRequired
                    inputMode='numeric'
                    label='Legal description'
                    placeholder='892702'
                    name='legalDescription'
                />
                <Input
                    // isRequired
                    inputMode='email'
                    label='Legal Entity Email'
                    placeholder='info@xyzcompany.com'
                    name='legalEntityEmail'
                />
                <Input
                    // isRequired
                    inputMode='text'
                    label='Legal Entity address'
                    placeholder='1234 Elm St, City, Country'
                    name='legalEntityAddress'
                />
                <Input
                    // isRequired
                    inputMode='numeric'
                    label='Legal Entity tax registration number'
                    placeholder='89809289'
                    name='legalEntityTaxRegistrationNumber'
                />
                <Input
                    // isRequired
                    inputMode='text'
                    label='Legal Entity country'
                    placeholder='CountryABC'
                    name='legalEntityCountry'
                />
                <Textarea
                    className='lg:col-span-2'
                    // isRequired
                    inputMode='text'
                    label='Account description'
                    placeholder='Some description'
                />
            </div>
            <Divider />

            <Button type='submit' color='primary'>
                Submit
            </Button>
        </form>
    )
}