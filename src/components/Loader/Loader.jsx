import { Oval } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <Oval
            height={80}
            width={80}
            color="#3f51b5"
            wrapperStyle={{
                justifyContent: 'center',
                marginTop: 15,
            }}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#3f51b5"
            strokeWidth={2}
            strokeWidthSecondary={2}
        /> 
    )
}
